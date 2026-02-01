/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
function brute(nums1: number[], nums2: number[]): number[] {
  let hashMap: Record<string, boolean> = {}; // O(n)
  let result: number[] = []; // O(n)

  for (const num1 of nums1) {
    // O(n)
    for (const num2 of nums2) {
      // O(m)
      if (num1 === num2 && !hashMap[num1]) {
        result.push(num1);
        hashMap[num1] = true;
      }
    }
  }

  /**
   * TC: O(n*m) = O(n^2)
   * SC: O(2n) = O(n)
   */

  return result;
}

function better(nums1: number[], nums2: number[]): number[] {
  let result: number[] = []; // O(n)
  let hashMap: Record<string, boolean> = {}; // O(n)
  let hashMapInserted: Record<string, boolean> = {}; // O(n)

  // O(n)
  for (const num of nums1) {
    hashMap[num] = true;
  }

  // O(n)
  for (const num of nums2) {
    if (hashMap[num] && !hashMapInserted[num]) {
      result.push(num);
      hashMapInserted[num] = true;
    }
  }

  /**
   * TC: O(2n) = O(n)
   * SC: O(3n) = O(n)
   */

  return result;
}

function intersection(nums1: number[], nums2: number[]): number[] {
  let result: number[] = [];

  // O(n log n)
  nums1 = nums1.sort((a, b) => a - b);
  // O(n log n)
  nums2 = nums2.sort((a, b) => a - b);

  let num1P = 0;
  let num2P = 0;

  // O(n)
  while (num1P < nums1.length && num2P < nums2.length) {
    if (
      nums1[num1P] === nums2[num2P] &&
      result[result.length - 1] !== nums1[num1P]
    ) {
      result.push(nums1[num1P]!);
      num1P++;
      num2P++;
    } else if (nums1[num1P]! > nums2[num2P]!) num2P++;
    else num1P++;
  }

  /**
   * TC: O(2*(n log n)) = O(n log n)
   * SC: O(1)
   */

  return result;
}
// @lc code=end
