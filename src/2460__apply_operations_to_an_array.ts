function applyOperations(nums: number[]): number[] {
  // [1,2,2,1,1,0]
  // [1,2,2,1,1,0] (0)
  // [1,4,0,1,1,0] (1)
  // [1,4,0,1,1,0] (2)
  // [1,4,0,2,0,0] (3)
  // [1,4,0,2,0,0] (4)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i]! *= 2;
      nums[i + 1] = 0;
    }
  }

  // [1,4,0,2,0,0]
  //      x/i
  // Move the x pointer to 0 (3);

  // if nums[i] !== 0
  /// then nums[x] = nums[i];
  /// then nums[i] = nums[x];
  /// then x pointer should be incremented

  // [1,4,0,2,0,0]
  //        x
  //               i
  // [1,4,2,0,0,0]
  /// [1,4,5,2,5,8]
  let pos = 0;
  while (pos < nums.length && nums[pos] !== 0) pos++;

  for (let i = pos; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[i];
      nums[i] = nums[pos]!;
      nums[pos] = temp!;

      pos++;
    }
  }
  return nums;
}

console.log(
  applyOperations([
    312, 312, 436, 892, 0, 0, 528, 0, 686, 516, 0, 0, 0, 0, 0, 445, 445, 445,
    445, 445, 445, 984, 984, 984, 0, 0, 0, 0, 168, 0, 0, 647, 41, 203, 203, 241,
    241, 0, 628, 628, 0, 875, 875, 0, 0, 0, 803, 803, 54, 54, 852, 0, 0, 0, 958,
    195, 590, 300, 126, 0, 0, 523, 523,
  ]),
);
