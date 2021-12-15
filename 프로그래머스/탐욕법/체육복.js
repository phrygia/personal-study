// https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

// function solution(n, lost, reserve) {
//   let answer = n;
//   return answer;
// }
// console.log(solution(5, [2, 4], [1, 3, 5]));
// console.log(solution(5, [2, 4], [3]));
// console.log(solution(3, [3], [1]));

// // 그리디 - 욕심쟁이 알고리즘

function ArrayList() {
  let array = [];

  this.insert = (...item) => {
    array.push(...item);
  };

  this.toString = () => {
    return array.join();
  };

  this.bubbleSort = () => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
          console.log(array);
        }
      }
      console.log("---");
    }
  };

  this.insertionSort = () => {
    const length = array.length;
    let j;
    let temp;

    for (let i = 1; i < length; i++) {
      // console.log(array);
      j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
      console.log(array);
    }
  };

  const swap = (index1, index2) => {
    const aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };

  // 병합정렬
  this.mergeSort = () => {
    array = mergeSortRec(array);
  };

  // 병합정렬 헬퍼 함수
  const mergeSortRec = (array) => {
    const length = array.length;

    if (length === 1) return array;

    const mid = Math.floor(length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, length);

    // console.log(left, right);

    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  const merge = (left, right) => {
    let result = [];
    let il = 0;
    let ir = 0;

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    while (il < left.length) {
      result.push(left[il++]);
    }

    while (ir < right.length) {
      result.push(right[ir++]);
    }
    console.log(result);

    return result;
  };

  // 선택정렬
  this.selectionSort = () => {
    const length = array.length;
    let indexMin;

    for (let i = 0; i < length - 1; i++) {
      indexMin = i;
      for (let j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        swap(i, indexMin);
      }
    }
  };

  // 퀵정렬
  this.quickSort = () => {
    quick(array, 0, array.length - 1);
  };

  const quick = (array, left, right) => {
    let index;
    if (array.length > 1) {
      index = partition(array, left, right);
      console.log(array, left, right);
      if (left < index - 1) {
        quick(array, left, index - 1);
      }
      if (index < right) {
        quick(array, index, right);
      }
    }
  };

  const partition = (array, left, right) => {
    let pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (array[i] < pivot) i++;
      while (array[j] > pivot) j--;
      if (i <= j) {
        swapQuickSort(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  };

  const swapQuickSort = (array, index1, index2) => {
    const aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };
}

const array = new ArrayList();
array.insert(3, 1, 4, 1, 5, 9, 2, 6, 5, 4);
console.log(array.toString()); // 5,2,4,6,1,3,2,6
array.quickSort();
console.log(array.toString()); // 1,2,2,3,4,5,6,6
