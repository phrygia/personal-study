// node들을 연결하는 리스트
class linkedList {
  length = 0;
  head = null;

  // 추가
  add(value) {
    if (this.head) {
      this.head.next = new Node(value);
    } else {
      this.head = new Node(value);
      this.length++;
      return this.length;
    }
  }

  // 조회
  search(value) {}

  // 삭제
  remove(value) {}
}

class Node {
  next = null;

  constructor(value) {
    this.value = value;
  }
}

const ll = new linkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);

ll.search(4);
ll.search(7);

ll.remove(4);
ll.search(4);

console.log(ll);
