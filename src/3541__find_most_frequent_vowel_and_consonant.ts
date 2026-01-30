function maxFreqSum(s: string): number {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelFeq: Record<string, number> = {};
  let consFeq: Record<string, number> = {};

  for (const char of s) {
    /// In case of vowels.
    if (vowels.includes(char)) {
      if (vowelFeq[char]) {
        vowelFeq[char]++;
      } else {
        vowelFeq[char] = 1;
      }
    }
    /// In case of consonants
    else {
      if (consFeq[char]) {
        consFeq[char]++;
      } else {
        consFeq[char] = 1;
      }
    }
  }

  const vowelOcc: number[] = Object.values(vowelFeq);
  const consOcc: number[] = Object.values(consFeq);

  let max = 0;
  if (Boolean(vowelOcc.length)) {
    max += Math.max(...vowelOcc);
  }

  if (Boolean(consOcc.length)) {
    max += Math.max(...consOcc);
  }

  return max;
}

console.log(maxFreqSum("aeiaeia"));
