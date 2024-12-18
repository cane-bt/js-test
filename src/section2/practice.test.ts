/**
 * 【演習】
 *  1. `addItem`メソッドが、アイテムをリストに追加できることを確認するテストケース
 *  2. `removeItem`メソッドが、アイテムをリストから削除できることを確認するテストケース
 *  3. `removeItem`メソッドが、存在しないアイテムの削除を試みたときにエラーをスローすることを確認するテストケース
 */

import { ShoppingList } from './practice';

describe("ShoppingList", () => {
  let shoppingList: ShoppingList

  beforeEach(() => {
    shoppingList = new ShoppingList()
  })

  describe('addItem', () => {
    it("アイテムをリストに追加する", () => {
      shoppingList.addItem("apple")
      expect(shoppingList.list).toEqual(["apple"])
    })
  })

  describe('removeItem', () => {
    it("アイテムをリストから削除する", () => {
      shoppingList.addItem("apple")
      shoppingList.removeItem("apple")
      expect(shoppingList.list).not.toContain("apple")
    })

    it("リストにアイテムが存在しない場合はエラー", () => {
      expect(() => shoppingList.removeItem("banana")).toThrow("アイテム: banana は存在しません")
    })
  })
  // removeItem(item: string): void {
  //   const index = this.list.indexOf(item);
  //   if (index === -1) {
  //     throw new Error(`アイテム: ${item} は存在しません`);
  //   }
  //   this.list.splice(index, 1);
  // }
})
