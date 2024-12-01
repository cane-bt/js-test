// モック関数の戻り値の設定
it("モック関数に戻り値を設定する", () => {
    const mockFunc = jest.fn()
    mockFunc.mockReturnValue("mock return value")
    expect(mockFunc()).toBe("mock return value")
    // mockReturnValueは一度戻り値を設定すると
    //  そのあとは永続的に同じ値を返却し続ける
    expect(mockFunc()).toBe("mock return value")
    expect(mockFunc()).toBe("mock return value")
    expect(mockFunc()).toBe("mock return value")
})

it("モック関数に一度だけ返される戻り値を設定する", () => {
    const mockFunc = jest.fn()
    mockFunc.mockReturnValueOnce("mock return value")
    expect(mockFunc()).toBe("mock return value")
    // 以降のコードはエラー扱いになる(値が入らない)
    // expect(mockFunc()).toBe("mock return value")
    expect(mockFunc()).toBe(undefined)
})

// 非同期処理のためのモック関数
it("モック関数に非同期な戻り値を設定する", async () => {
    const mockFunc = jest.fn()
    mockFunc.mockResolvedValue("resolved value")
    const result = await mockFunc();
    expect(result).toBe("resolved value")
})
