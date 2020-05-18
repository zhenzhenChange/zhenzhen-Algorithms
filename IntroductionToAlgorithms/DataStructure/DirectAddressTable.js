/**
 * 模拟散列表操作（直接寻址）
 *
 * @param {*} DirectAddressTableArray 数组（直接寻址表）
 */
class DirectAddressTable {
  static DirectAddressTableArray;

  constructor(DirectAddressTableArray) {
    DirectAddressTable.DirectAddressTableArray = DirectAddressTableArray;
  }

  /**
   * 搜索操作
   *
   * 时间复杂度：O(1)
   *
   * @param {*} key
   * @returns {*}
   */
  static DirectAddressSearch(key) {
    return DirectAddressTable.DirectAddressTableArray[key];
  }

  /**
   * 插入操作
   *
   * 时间复杂度：O(1)
   *
   * @param {*} x
   */
  static DirectAddressInsert(x) {
    DirectAddressTable.DirectAddressTableArray[x.key] = x;
  }

  /**
   * 删除操作
   *
   * 时间复杂度：O(1)
   *
   * @param {*} x
   */
  static DirectAddressDelete(x) {
    DirectAddressTable.DirectAddressTableArray[x.key] = null;
  }
}

const x2 = { key: 2, val: "zhenzhen2" };
const x5 = { key: 5, val: "zhenzhen5" };

new DirectAddressTable(new Array(10).fill(null));
console.log(DirectAddressTable.DirectAddressTableArray);
DirectAddressTable.DirectAddressInsert(x2);
DirectAddressTable.DirectAddressInsert(x5);
console.log(DirectAddressTable.DirectAddressTableArray);
console.log(DirectAddressTable.DirectAddressSearch(2));
DirectAddressTable.DirectAddressDelete(x2);
console.log(DirectAddressTable.DirectAddressSearch(2));
