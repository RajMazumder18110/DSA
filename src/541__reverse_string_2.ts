function reverseStr(s: string, k: number): string {
  const str: string[] = [];
  for (let i = 0; i < s.length; i += k) {
    str.push(s.substring(i, i + k));
  }

  for (let i = 0; i < str.length; i += 2) {
    const reversed = str[i]?.split("").reverse().join("");
    str[i] = reversed!;
  }

  return str.join("");
}

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));
