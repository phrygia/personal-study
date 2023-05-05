// 1. 연결리스트
function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function (element) {
    var node = new Node(element),
      current;

    if (head === null) {
      //리스트가 비어있다면
      head = node;
    } else {
      current = head;

      //마지막 원소를 발견할 때까지 계속 루프 순환한다
      while (current.next) {
        current = current.next;
      }

      //마지막 원소를 링크할 수 있게 다음 노드에 할당한다
      current.next = node;
    }

    length++; //리스트의 크기를 업데이트한다
  };

  this.insert = function (position, element) {
    //범위 이외의 값인지 체크한다
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        //첫 번째로 추가

        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      length++; //리스트 크기를 업데이트한다

      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    //범위 이외의 값인지 체크한다
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;

      //첫 번째 원소 삭제
      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        //현재의 다음과 이전 것을 연결한다: 삭제하기 위해 건너뛴다
        previous.next = current.next;
      }

      length--;

      return current.element;
    } else {
      return null;
    }
  };

  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function (element) {
    var current = head,
      index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.size = function () {
    return length;
  };

  this.getHead = function () {
    return head;
  };

  this.toString = function () {
    var current = head,
      string = "";

    while (current) {
      string = current.element;
      current = current.next;
    }
    return string;
  };

  this.print = function () {
    console.log(this.toString());
  };
}

// 2. 해시테이블 - 체이닝
function HashTableSeparateChaining() {
  var table = [];

  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;

    this.toString = function () {
      return "[" + this.key + " - " + this.value + "]";
    };
  };

  var loseloseHashCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  var djb2HashCode = function (key) {
    var hash = 5381;
    for (var i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
  };

  var hashCode = function (key) {
    return djb2HashCode(key);
  };

  this.put = function (key, value) {
    var position = hashCode(key);
    console.log(position + " - " + key);

    if (table[position] == undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
  };

  this.get = function (key) {
    var position = hashCode(key);

    if (table[position] !== undefined && !table[position].isEmpty()) {
      //키/값을 찾기 위해 연결 리스트를 순회한다
      var current = table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }

      //처음이나 마지막 원소일 경우
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  };

  this.remove = function (key) {
    var position = hashCode(key);

    if (table[position] !== undefined) {
      //키/값을 찾기 위해 연결 리스트를 순회한다
      var current = table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }

      //처음이나 마지막 원소일 경우
      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }

    return false;
  };

  this.print = function () {
    for (var i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        console.log(table[i].toString());
      }
    }
  };
}

// 3. 스택
function Stack() {
  var items = [];

  this.push = function (element) {
    items.push(element);
  };

  this.pop = function () {
    return items.pop();
  };

  this.peek = function () {
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    return items.length == 0;
  };

  this.size = function () {
    return items.length;
  };

  this.clear = function () {
    items = [];
  };

  this.print = function () {
    console.log(items.toString());
  };

  this.toString = function () {
    return items.toString();
  };
}

// 4. 큐
function Queue() {
  var items = [];

  this.enqueue = function (element) {
    items.push(element);
  };

  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    return items[0];
  };

  this.isEmpty = function () {
    return items.length == 0;
  };

  this.clear = function () {
    items = [];
  };

  this.size = function () {
    return items.length;
  };

  this.print = function () {
    console.log(items.toString());
  };
}

// 5. 힙
class Heap {
  constructor() {
    this.items = [];
  }

  //값을 서로 바꾸는 메소드

  swap(index1, index2) {
    let temp = this.items[index1]; // items의 index1의 값을 temp(임시공간)에 담음

    this.items[index1] = this.items[index2]; // index1에 index2의 값을 저장

    this.items[index2] = temp; // index2에 아까 index1의 값을 temp에 넣어놓은 값을 저장
  }

  //부모 인덱스 구하는 메소드

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  //왼쪽 자식 인덱스 구하는 메소드

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  //오른쪽 자식 인덱스 구하는 메소드

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  //부모 노드 구하는 메소드

  parent(index) {
    return this.items[this.parentIndex(index)];
  }

  //왼쪽 자식 노드 구하는 메소드

  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }

  //오른쪽 자식 노드 구하는 메소드

  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  //최대 힙의 경우 최댓값을 반환하고 최소 힙의 경우 최솟값을 반환하는 메소드

  peek() {
    return this.items[0];
  }

  //힙의 크기(항목 개수)를 반환하는 메소드

  size() {
    return this.items.length;
  }
}

// 5-1. 최소 힙
class MinHeap extends Heap {
  // MinHeap 클래스는 Heap 클래스를 상속받았으므로 Heap 클래스의 메소드를 모두 사용할 수 있다.
  bubbleUp() {
    let index = this.items.length - 1;

    while (
      this.parent(index) !== undefined &&
      this.parent(index) > this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));

      index = this.parentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) < this.items[index] ||
        this.rightChild(index) < this.items[index])
    ) {
      let smallerIndex = this.leftChildIndex(index);

      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) < this.items[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }

      this.swap(index, smallerIndex);

      index = smallerIndex;
    }
  }

  // 힙에 원소를 추가하는 함수

  add(item) {
    this.items[this.items.length] = item;

    this.bubbleUp();
  }

  // 힙에서 원소를 빼내는 함수

  // 최소 힙이라면 최솟값이 빠져나올 것이고 최대힙이라면 최댓값이 빠져나온다.

  poll() {
    let item = this.items[0]; // 첫번째 원소 keep

    this.items[0] = this.items[this.items.length - 1]; // 맨 마지막 원소를 첫번째 원소로 복사

    this.items.pop(); // 맨 마지막 원소 삭제

    this.bubbleDown();

    return item; // keep해둔 값 반환
  }
}

// 5-2. 최대 힙

class MaxHeap extends MinHeap {
  //MaxHeap의 경우 MinHeap을 상속받았으므로 MinHeap의 모든 함수를 사용할 수 있지만 bubbleUp과 bubbleDown은 Overriding(재정의)하였다.
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) < this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) > this.items[index] ||
        this.rightChild(index) > this.items[index])
    ) {
      let largerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) > this.items[largerIndex]
      ) {
        largerIndex = this.rightChildIndex(index);
      }
      this.swap(largerIndex, index);
      index = largerIndex;
    }
  }
}
const minheap = new MinHeap();
minheap.add(1);
minheap.add(10);
minheap.add(5);
minheap.add(100);
minheap.add(8);

console.log(minheap); //array(5) [1, 8, 5, 100, 10]
console.log(minheap.poll()); // 1
console.log(minheap.poll()); // 5
console.log(minheap.poll()); // 8
console.log(minheap.poll()); // 10
console.log(minheap.poll()); // 100
console.log(minheap); // array(0)

//최대 힙을 사용하는 코드
const maxheap = new MaxHeap();
maxheap.add(1);
maxheap.add(10);
maxheap.add(5);
maxheap.add(100);
maxheap.add(8);

console.log(maxheap); //array(5) [100, 10, 5, 1, 8]
console.log(maxheap.poll()); // 100
console.log(maxheap.poll()); // 10
console.log(maxheap.poll()); // 8
console.log(maxheap.poll()); // 5
console.log(maxheap.poll()); // 1

//  6. 정렬
// 버블 정렬
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// 선택 정렬\
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[min] > arr[j]) {
      min = j;
    }
  }

  if (arr[min] !== arr[i]) {
    swap(arr, i, min);
  }

  return arr;
}

// 삽입 정렬
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let targetIdx = 1;

    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      targetIdx = j;
      arr[targetIdx + 1] = arr[targetIdx];
    }
    if (targetIdx) {
      arr[targetIdx] = currentVal;
    }
  }
  return arr;
}

// 병합 정렬
function MergeSort(arr) {
  var len = arr.length;
  if (len == 1) {
    return arr;
  }
  var middle = Math.floor(len / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, len);
  function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
  }
  return merge(MergeSort(left), MergeSort(right));
}

// 퀵정렬
function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
function QuickSort(arr) {
  if (arr.length == 0) {
    return [];
  }
  var middle = arr[0];
  var len = arr.length;
  var left = [],
    right = [];
  for (var i = 1; i < len; ++i) {
    if (arr[i] < middle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return QuickSort(left).concat(middle, QuickSort(right));
}

// 7. dfs, bfs
class DirectedGraph {
  constructor() {
    this.edges = {};
  }
  // 정점 추가
  addVertex(vertex) {
    this.edges[vertex] = {};
  }

  // 간선 추가
  addEdge(originVertex, destVertex, weight) {
    if (weight === undefined) {
      weight = 0;
    }
    this.edges[originVertex][destVertex] = weight;
  }

  // BFS (너비 우선 탐색, 큐를 이용)
  traverseBFS(startVertex) {
    console.log(`BFS`);
    const queue = [];
    const visited = {};
    queue.push(startVertex);

    while (queue.length) {
      let vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        console.log(`방문한 노드 : ${vertex}`);
        for (let adjacentVertex in this.edges[vertex]) {
          queue.push(adjacentVertex);
        }
      }
    }
    console.log(`----------------`);
  }

  // DFS
  traverseDFS(vertex) {
    const visited = {};
    this._traverseDFS(vertex, visited);
  }

  _traverseDFS(vertex, visited) {
    visited[vertex] = true;
    console.log(`방문한 노드 : ${vertex}`);
    for (let adjacentVertex in this.edges[vertex]) {
      if (!visited[adjacentVertex]) {
        this._traverseDFS(adjacentVertex, visited);
      }
    }
  }
}
directedGraph = new DirectedGraph();
directedGraph.addVertex("A");
directedGraph.addVertex("B");
directedGraph.addVertex("C");
directedGraph.addVertex("E");
directedGraph.addVertex("D");
directedGraph.addVertex("G");
directedGraph.addVertex("F");
directedGraph.addVertex("H");
directedGraph.addVertex("J");

directedGraph.addEdge("A", "B");
directedGraph.addEdge("B", "C");
directedGraph.addEdge("B", "E");
directedGraph.addEdge("C", "D");
directedGraph.addEdge("D", "G");
directedGraph.addEdge("D", "F");
directedGraph.addEdge("G", "H");
directedGraph.addEdge("F", "J");

console.log(directedGraph);
directedGraph.traverseBFS("A");
directedGraph.traverseDFS("A");
