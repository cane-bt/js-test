import { sum } from "./sum";

// it("1+2は3である", () => {
//     expect(sum(1, 2)).toBe(3)
// })

// https://jestjs.io/ja/docs/api#testeachtablename-fn-timeout
it.each`
    a | b | expected
    ${1} | ${2} | ${3}
    ${1} | ${-2} | ${-1}
`("$aと$bを足すと$expectedになる", ({ a, b, expected }) => {
    expect(sum(a, b)).toBe(expected)
})
