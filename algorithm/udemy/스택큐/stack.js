// 후입 선출 (rifo)

const stack = [];
stack.push("google");
stack.push("instgram");
stack.push("youtube");

// console.log(stack);
stack.pop();
// stack.shift();
// console.log(stack);

const stack2 = [];
stack2.unshift("create new file");
stack2.unshift("resized file");
stack2.unshift("clone out wrinkle");

// console.log(stack2);
// stack2.shift();
// console.log(stack2);

// shift,unshift는 맨 앞에 요소를 추가하면 나머지 요소들 전부 새로운 인덱스를 줘야 함

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
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

const stack3 = new Stack();
stack3.push("FISRT");
stack3.push("SECOND");
stack3.push("THIRD");
stack3.push("FOURTH");
stack3.pop();
console.log(stack3);
// stack3.pop("");
// stack3.pop("");
// stack3.pop("");
