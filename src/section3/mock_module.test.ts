// node.js組込みのfsモジュール全体をmock化
import fs from "fs";
import { readFile } from "./mock_module";

// moduleを引数にとる
// トップレベルで記述する必要がある
jest.mock("fs")

// fsがモック化されていることをTypeScriptコンパイラに伝えるための設定
//   モック化されたfs型のオブジェクトを定義
const mockFs = jest.mocked(fs);

mockFs.readFileSync.mockReturnValue('dummy data')
// mockReturnValueでエラーが出る書き方
//  fsがモック化されていることをTypeScriptコンパイラが認識していないことが原因
//      ↓mockReturnValueが存在しませんという意味
//          Property 'mockReturnValue' does not exist on type '{ (path: PathOrFileDescriptor, options?: { encoding?: null | undefined; flag?: string | undefined; } | null | undefined): Buffer; (path: PathOrFileDescriptor, options: { ...; } | BufferEncoding): string; (path: PathOrFileDescriptor, options?: BufferEncoding | ... 2 more ... | undefined): string | Buffer; }'.ts(2339)
//          any
// fs.readFileSync.mockReturnValue('dummy data')

it("readFileがデータを返却する", () => {
    // 適当なパスを渡してreadFile関数を実行する
    const result = readFile('path/dummy')
    expect(result).toBe('dummy data')
    expect(fs.readFileSync).toHaveBeenCalledTimes(1)
})
