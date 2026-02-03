/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

// console.log(JSON.stringify(head, null, "  "));
// console.log(JSON.stringify(reverse(head), null, "  "));

console.log(isPalindrome(head));

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

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false;

  let tHead: ListNode | null = head;
  let tRev = reverse(head);
  while (tHead && tRev) {
    if (tHead.val !== tRev.val) return false;
    tHead = tHead.next;
    tRev = tRev.next;

    console.log(tHead, tRev);
  }
  return true;
}

function reverse(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  //   let reversed: ListNode | null = null;
  //   let curr: ListNode | null = head;
  //   while (curr) {
  //     const temp: ListNode | null = curr.next;
  //     curr.next = reversed;
  //     reversed = curr;
  //     curr = temp;
  //   }
  //   return reversed;

  const reversed = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return reversed;
}

// @lc code=end
