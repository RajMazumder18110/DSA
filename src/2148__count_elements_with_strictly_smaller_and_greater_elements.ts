function countElements(nums: number[]): number {
  let maxEl = -Infinity;
  let minEl = Infinity;

  for (const num of nums) {
    maxEl = Math.max(maxEl, num);
    minEl = Math.min(minEl, num);
  }

  let count = 0;
  for (const num of nums) {
    if (num > minEl && num < maxEl) count++;
  }
  return count;
}

console.log(countElements([11, 7, 2, 5]));
