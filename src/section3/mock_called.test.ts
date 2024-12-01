// モック関数が呼び出されたことを検証する
it("モック関数が呼び出される", () => {
    const mockFunc = jest.fn()
    mockFunc()
    // mockFuncにカッコはつけない
    expect(mockFunc).toHaveBeenCalled();
})

it("モック関数が２回呼び出される", () => {
    const mockFunc = jest.fn()
    mockFunc()
    mockFunc()
    expect(mockFunc).toHaveBeenCalledTimes(2)
})

it("モック関数に引数hogeが渡される", () => {
    const mockFunc = jest.fn()
    mockFunc("hoge")
    expect(mockFunc).toHaveBeenCalledWith("hoge")
})
