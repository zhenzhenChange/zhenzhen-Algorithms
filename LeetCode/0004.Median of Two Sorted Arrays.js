/**
 * 寻找两个正序数组的中位数（归并）
 *
 * 时间复杂度：O(m + n)
 * 空间复杂度：O(m + n)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const ary = [...nums1, ...nums2].sort((a, b) => a - b);

  const mid = ary.length >> 1;

  if (ary.length % 2 == 0) {
    return (ary[mid - 1] + ary[mid]) / 2;
  } else {
    return ary[mid].toFixed(1);
  }
};

var nums1 = [1, 3];
var nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));
