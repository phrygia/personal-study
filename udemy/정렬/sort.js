// 합병정렬 - udemy
// 목표 : 배열을 계속 반으로 나누기
// -> slice로 0에서 중간 배열로 2개로 쪼갠다
// -> 함수를 다시 호출해(재귀) 배열을 다시 절반으로 쪼갠다. (4개 ) 재귀 재귀

const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;

  // 동시에 배열 둘을 발복할떄 적용
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }

  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);
  return result;
};
// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// console.log(merge([8, 7, 6, 5], [4, 3, 2, 1]));

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};
// console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));

// 퀵 정렬

const swapQuickSort = (arr, index1, index2) => {
  return (arr[(index1, index2)] = arr[(index2, index1)]);
};

const partition = (arr, left, right) => {
  let pivot = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    if (i <= j) {
      swapQuickSort(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
};

const quick = (arr, left, right) => {
  let index;
  if (arr.length) {
    index = partition(arr, left, right);

    if (left < index - 1) quick(arr, left, index - 1);
    if (index < right) quick(arr, index, right);
  }
};

const quickSort = (arr) => {
  quick(arr, 0, arr.length - 1);
};
const quickSort2 = (arr) => {
  // arr의 요소가 하나이면 arr 자체를 그대로 반환
  if (arr.length < 2) return arr;

  // quickSort 초기 배열을 선언 첫 pivot 배열의 첫 번째 요소이다.
  let pivot = [arr[0]];
  let left = [];
  let right = [];

  // for문을 돌면서 pivot보다 작은 것은 왼쪽 큰 것은 오른쪽 그렇지 않은 것은 pivot에 넣어준다.
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else if (arr[i] > pivot) right.push(arr[i]);
    else pivot.push(arr[i]);
  }
  // console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
  console.log(quickSort2(left).concat(pivot, quickSort2(right)));
  // 재귀함수 구조로 다시 선언해서 끝날때까지 시작한다.
  return quickSort2(left).concat(pivot, quickSort2(right));
};

console.log(quickSort2([3, 5, 1, 6, 4, 7, 2]));
