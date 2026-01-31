function nextGreatestLetter(letters: string[], target: string): string {
  for (const letter of letters) {
    if (letter.charCodeAt(0) > target.charCodeAt(0)) {
      return letter;
    }
  }
  return letters[0]!;
}

function nextGreatestLetterBinary(letters: string[], target: string): string {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (letters[mid]!.charCodeAt(0) > target.charCodeAt(0)) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  if (start >= letters.length) return letters[0]!;
  return letters[start]!;
}

console.log(nextGreatestLetterBinary(["x", "x", "y", "y"], "z"));
