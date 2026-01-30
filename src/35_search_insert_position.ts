function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length;

  if (target > nums[end - 1]) return end;

  while (start <= end) {
    const midIdx = Math.floor((start + end) / 2);
    if (nums[midIdx] === target) return midIdx;

    if (nums[midIdx] > target) {
      end = midIdx - 1;
    } else {
      start = midIdx + 1;
    }
  }

  return start;

  /**
        start = 0;
        end = 3/ 0

        mid = 1
        [1,3,5,6]
     */
}
