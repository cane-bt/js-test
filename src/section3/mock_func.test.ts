// モック関数の作成方法
// ２パターンあり
it("初めてのmock", () => {
    // jest.fn() 何も行わないmock関数を定義
    const mockFunc = jest.fn(() =>
        "hello mock"
    )
    expect(mockFunc()).toBe("hello mock")
})

it("mockImplementation", () => {
    const mockFunc = jest.fn()
    mockFunc.mockImplementation(() =>
        "hello mock2"
    )
    expect(mockFunc()).toBe("hello mock2")
})
