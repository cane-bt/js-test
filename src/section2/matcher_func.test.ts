// https://www.udemy.com/course/ts-webapp-test/learn/lecture/38186082#overview
// 基本的なマッチャー関数
// toBe
it("num", () => {
    expect(2 + 2).toBe(4)
})

// toEqual
it("配列のテスト", () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2, 3]
    expect(arr1).toEqual(arr2)
})

it("オブジェクトのテスト", () => {
    const obj1 = {
        a: 1,
        b: 2
    }
    const obj2 = {
        a: 1,
        b: 2
    }
    expect(obj1).toEqual(obj2)
})

// not
it("num", () => {
    expect(2 + 2).not.toBe(5)
})
