function removeDuplicates(nums: number[]): number {
  // [1, 1, 1, 2, 2, 3]
  //
  /**
   * counter = 0
   * lastNum = 3
   * x = 5
   * i = 5
   *
   * [1, 1, 1, 2, 2, 3] (1st)
   * [1, 1, 1, 2, 2, 3] (2nd)
   * [1, 1, 1, 2, 2, 3] (3nd)
   * [1, 1, 2, 1, 2, 3] (4th)
   * [1, 1, 2, 2, 3, 1] (5th)
   */
  /**
   *  let counter = 0;
   *  let lastNum = nums[0]
   *
   *  for loop from 0 -> n
   *      if(counter == 2 && nums[i] === lastNum) continue;
   *      if(counter == 2 && nums[i] > lastNum)
   *          lastNum = nums[i]
   *          counter = 0;
   *
   *      if nums[i] === lastNum && counter < 2
   *          then increment the counter
   *          nums[x] = nums[i]
   *          nums[i] = nums[x]
   *          increment the x pos
   *
   */

  let counter = 0;
  let pos = 0;
  let lastNum = nums[0]!;

  for (let i = 0; i < nums.length; i++) {
    if (counter === 2 && nums[i] === lastNum) continue;

    if (counter <= 2 && nums[i]! > lastNum) {
      lastNum = nums[i]!;
      counter = 0;
    }

    if (nums[i] === lastNum && counter < 2) {
      const tem = nums[i];
      nums[i] = nums[pos]!;
      nums[pos] = tem!;

      counter++;
      pos++;
    }
  }

  return pos;
}

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
