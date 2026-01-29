function reverseVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u"];

  let start = 0;
  let end = s.length - 1;
  let str = s.split("");

  while (start < end) {
    /// Move start pointer till vowel
    while (start < end && !vowels.includes(str[start]!.toLowerCase())) start++;
    /// Move end pointer till vowel
    while (start < end && !vowels.includes(str[end]!.toLowerCase())) end--;

    /// Swap end with start
    const temp = str[start];
    str[start] = str[end]!;
    str[end] = temp!;

    /// Move the pointer both
    start++;
    end--;
  }

  return str.join("");
}
