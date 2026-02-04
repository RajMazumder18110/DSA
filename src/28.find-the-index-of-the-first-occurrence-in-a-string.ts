/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  if (haystack.length < needle.length) return -1;

  let start = 0;
  let end = needle.length - 1;

  while (end < haystack.length) {
    let j = 0;
    let i = start;
    while (j < needle.length) {
      /// If both doesn't match
      if (haystack[i] !== needle[j]) break;
      /// Else keep moving
      i++;
      j++;
    }
    /// If matches it must be equals to the length of needle.
    if (j >= needle.length) return start;

    start++;
    end++;
  }

  return -1;
}
// @lc code=end

console.log(strStr("mississippi", "issip"));
