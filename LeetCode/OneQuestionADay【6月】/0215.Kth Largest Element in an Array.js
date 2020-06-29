/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = (nums, k) => nums.sort((a, b) => a - b)[nums.length - k];