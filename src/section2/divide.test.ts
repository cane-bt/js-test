// toThrow
import { divide, ZeroDivisorError } from "./divide";

// 例外処理はテスト対象の関数を無名関数でラップする必要がある
it("0で割るとエラーが発生する", () => {
    // 成功しないテスト
    expect(() => divide(10, 1)).toThrow()
    // 成功するテスト
    expect(() => divide(10, 0)).toThrow()
    expect(() => divide(10, 0)).toThrow("0で割ることはできません")
    expect(() => divide(10, 0)).toThrow(ZeroDivisorError)
})
