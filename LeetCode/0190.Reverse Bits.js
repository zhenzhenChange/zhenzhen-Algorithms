/**
 * 颠倒二进制位
 *
 * @param {number} n 一个正整数
 * @return {number}  一个正整数
 */
var reverseBits = (n) => +`0b${[...n.toString(2).padStart(32, 0)].reverse().join('')}`;

var n = 43261596;
console.log(reverseBits(n));
