/*
 * @lc app=leetcode id=912 lang=typescript
 *
 * [912] Sort an Array
 */

// @lc code=start
function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const left = sortArray(nums.slice(0, mid));
  const right = sortArray(nums.slice(mid));
  return merge(left, right);
}

const merge = (nums1: number[], nums2: number[]): number[] => {
  let i = 0,
    j = 0;
  const result: number[] = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i]! < nums2[j]!) {
      result.push(nums1[i]!);
      i++;
    } else {
      result.push(nums2[j]!);
      j++;
    }
  }

  for (; i < nums1.length; i++) {
    result.push(nums1[i]!);
  }

  for (; j < nums2.length; j++) {
    result.push(nums2[j]!);
  }

  return result;
};
// @lc code=end
