function reverse(x: number): number {
  const xCopy = x;
  let reverse = 0;
  x = Math.abs(x);

  while (x != 0) {
    const rem = x % 10;
    reverse = reverse * 10 + rem;
    x = Math.floor(x / 10);
  }

  if (reverse >= 2 ** 31 - 1) return 0;
  return xCopy < 0 ? -reverse : reverse;
}
