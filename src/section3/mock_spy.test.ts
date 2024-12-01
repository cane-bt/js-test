import { Calculator } from "./mock_spy";

it("sumメソッドが呼び出される", () => {
    const calculator = new Calculator()
    // jest.spyOnはspyインスタンスを返す
    //  spyインスタンスは
    //      mockImplementationやmockReturnValueなどのメソッドを持つ
    //          ↑オリジナルの関数の挙動を変更することもできる
    const sumSpy = jest.spyOn(calculator, "sum")
    // オリジナルの関数を呼び出しresultに格納してテストできる
    const result = calculator.sum(1, 2)
    expect(result).toBe(3)
    expect(sumSpy).toHaveBeenCalledTimes(1)
    expect(sumSpy).toHaveBeenCalledWith(1, 2)

    // 設定したspyが他のテストに影響を与えないように
    //  テスト終了後は解除することが推奨される
    sumSpy.mockRestore()
})
