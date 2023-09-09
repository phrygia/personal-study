// node들의 집합
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // hello -> goodbye -> !
  unShift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    //  else {
    //   const currentHead = this.head;

    //   this.head = newNode;
    //   this.head.next = currentHead;
    // }
    this.length++;
  }

  // hello -> goodbye -> !
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      let newTail = current;

      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }

  shift() {
    if (!this.head) return undefined;
    else {
      const currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return currentHead;
    }
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    // console.log(current.value);
    return current;
  }

  // hello ->  // oo   goodbye -> !

  set(index, value) {
    const fonundNode = this.get(index);

    if (fonundNode) {
      fonundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index > this.length || index < 0) return false;
    else if (index === this.length) return !!this.push(value);
    else if (index === 0) return !!this.unShift(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index > this.length || index < 0) return false;
    else if (index === this.length - 1) return !!this.pop();
    else if (index === 0) return !!this.shift();

    const prev = this.get(index - 1);
    const current = prev.next;
    prev.next = current.next;
    this.length--;
    return true;
  }

  reverse() {
    let node = this.head; // 0
    this.head = this.tail; // 3
    this.tail = node; // 0

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next; // 1, 2, 3
      node.next = prev; // null, 0, 1
      prev = node; // 0, 1, 2
      node = next; // 1, 2, 3
    }
    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}
// const first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");

// const list = new SinglyLinkedList();
// list.push(0);
// list.push(1);
// list.push(2);
// list.push(3);
// list.print();
// list.reverse();
// list.print();
// list.insert(0, -1);
// list.remove(1);
// list.set(0, "oh");
// console.log(list);
// list.get(1);

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummyNode = new ListNode();
  let currentNode = dummyNode;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }

  if (list1) currentNode.next = list1;
  else currentNode.next = list2;

  return dummyNode.next;
};
console.log(mergeTwoLists([ListNode(1), 2, 4], [1, 3, 4]));
