/*
 * @lc app=leetcode id=707 lang=typescript
 *
 * [707] Design Linked List
 */

// @lc code=start
class LLNode {
  public value: number;
  public next?: LLNode;
  constructor(data: number) {
    this.value = data;
    this.next = undefined;
  }
}

class MyLinkedList {
  public size: number;
  public head: LLNode | undefined;

  constructor() {
    this.head = undefined;
    this.size = 0;
  }

  get(index: number): number {
    if (index >= this.size) return -1;

    let curr: LLNode | undefined = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr?.next;
    }
    return curr?.value ?? -1;
  }

  addAtHead(val: number): void {
    const newLL = new LLNode(val);
    newLL.next = this.head;
    this.head = newLL;
    this.size++;
  }

  addAtTail(val: number): void {
    let curr: LLNode | undefined = this.head;
    while (curr && curr.next) {
      curr = curr.next;
    }
    const newLL = new LLNode(val);
    if (!curr) {
      this.head = newLL;
    } else {
      curr.next = newLL;
    }
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) return;
    else if (index === this.size) {
      this.addAtTail(val);
      return;
    } else if (index === 0) {
      this.addAtHead(val);
      return;
    }

    let curr: LLNode | undefined = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr?.next;
    }

    const newLL = new LLNode(val);
    newLL.next = curr?.next;
    curr!.next = newLL;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index >= this.size) return;
    if (index === 0) {
      this.head = this.head?.next;
      return;
    }

    let curr: LLNode | undefined = this.head;
    for (let i = 0; i < index - 1; i++) {
      console.log(i, index);
      curr = curr?.next;
    }

    curr!.next = curr?.next?.next;
    this.size--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

const obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtTail(3);
// obj.addAtHead(1);
obj.addAtIndex(1, 2); // [20,30,10]
obj.deleteAtIndex(0); /// [20,10,40]
console.log(JSON.stringify(obj, null, "  "));
console.log(obj.get(1));

/**
 * [1,2,7]
 */
