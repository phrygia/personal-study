const q = [];
q.push("FISRT");
q.push("SECOND");
q.push("THIRD");
// console.log(q);

q.shift();
q.shift();
q.shift();
// console.log(q);

q.unshift("FISRT");
q.unshift("SECOND");
q.unshift("THIRD");
// console.log(q);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequene() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const q2 = new Queue();
q2.enqueue("FISRT");
q2.enqueue("SECOND");
q2.enqueue("THIRD");
q2.enqueue("FOURTH");
q2.dequene();
console.log(q2);
