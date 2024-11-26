// https://www.udemy.com/course/ts-webapp-test/learn/lecture/38186086#overview
// 例外処理
export class ZeroDivisorError extends Error { }

export function divide(dividend: number, divisor: number) {
    if (divisor === 0) throw new ZeroDivisorError("0で割ることはできません")
    return dividend / divisor;
}
