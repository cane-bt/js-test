import { delay } from "./async_func";

it("delayが指定された時間後にメッセージを返す", async () => {
    const result = await delay("hello jest", 1000)
    expect(result).toBe("hello jest")
})

it("timeがマイナスの場合はエラーが発生する", async () => {
    try {
        const result = await delay("hello jest", -1)
    } catch (error: any) {
        expect(error.message).toBe("timeは0以上で指定して下さい")
    }
})
