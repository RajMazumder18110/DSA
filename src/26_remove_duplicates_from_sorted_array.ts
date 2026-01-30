function removeDuplicates(nums: number[]): number {
  let i = 0;
  for (const num of nums) {
    if (num > nums[i]!) {
      nums[++i] = num;
    }
  }
  return i + 1;
}
