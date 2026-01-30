function missingNumber(nums: number[]): number {
  const computedSum = nums.reduce((sum, num) => sum + num, 0);

  const start = 0;
  const end = nums.length;
  const totalNumbers = Math.abs(start - end) + 1;
  const actualSum = (totalNumbers * (start + end)) / 2;

  return actualSum - computedSum;
}

/**
 * if you want to calculate sum of all numbers between a -> b
 * totalNumbers = |(a-b)| + 1
 *
 * sum = (totalNumbers * (a+b)) / 2
 */
