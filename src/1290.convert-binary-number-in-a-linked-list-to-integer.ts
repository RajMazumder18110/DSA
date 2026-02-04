/*
 * @lc app=leetcode id=1290 lang=typescript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getDecimalValue(head: ListNode | null): number {
  const result = calc(head!);
  return result.sum;
}

function calc(head: ListNode): { index: number; sum: number } {
  if (!head.next) {
    return {
      index: 0,
      sum: Math.pow(2, 0) * head.val,
    };
  }

  const result = calc(head.next);
  const sumCurr = head.val === 0 ? 0 : Math.pow(2, result.index + 1) * head.val;
  return {
    index: result.index + 1,
    sum: sumCurr + result.sum,
  };
}
// @lc code=end
