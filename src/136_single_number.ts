function singleNumberWithMap(nums: number[]): number {
  let tracker: Record<string, number> = {};
  for (const num of nums) {
    if (tracker[num]) {
      tracker[num]++;
    } else {
      tracker[num] = 1;
    }
  }

  for (const [key, val] of Object.entries(tracker)) {
    if (val === 1) return Number(key);
  }
  return Number(Object.keys(tracker)[0]);
}

function singleNumberWithXOR(nums: number[]): number {
  let xor = 0;
  for (const num of nums) {
    xor = xor ^ num;
  }
  return xor;
}
