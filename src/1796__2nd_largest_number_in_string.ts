function secondHighest(s: string): number {
  let first = -Infinity;
  let second = -Infinity;

  for (const char of s) {
    const num = parseInt(char);
    const isNum = isNaN(num);
    if (isNum || num === first || num === second) continue;

    if (num > first) {
      let temp1st = first;

      first = num;
      second = temp1st;
    } else if (num > second) {
      second = num;
    }
  }

  if (second === -Infinity) return -1;
  return second;
}
