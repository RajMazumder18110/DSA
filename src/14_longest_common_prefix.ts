function longestCommonPrefix(strs: string[]): string {
  /// Edge case
  if (strs.length === 1) return strs[0]!;
  const longestPrefix = strs[0]!;
  if (longestPrefix!.length < 1) return longestPrefix;

  let pointer = 0;
  while (pointer < longestPrefix.length) {
    for (const word of strs) {
      if (word[pointer] !== longestPrefix[pointer])
        return longestPrefix?.slice(0, pointer);
    }
    pointer++;
  }
  return longestPrefix?.slice(0, pointer);
}

console.log(longestCommonPrefix(["flower", "flower", "flower"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
