// 1. 순차 검색/ 선형 검색

const sequentialSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) return i; // or return true
  }
  return false; // 검색 실패
};

// console.log(sequentialSearch([5, 4, 3, 2, 1], 2));

// 2진 검색
const binarySearch = (array, item) => {
  array.sort((a, b) => a - b);

  let low = 0;
  let high = array.length - 1;
  let mid;
  let element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2); // 가운데 index 찾기
    element = array[mid]; // 가운데 index 값 저장
    if (element < item) {
      console.log("lower", element, low, mid);
      low = mid + 1; // 기운데 값이 검색값보다 작다면
    } else if (element > item) {
      console.log("higher", element, high, mid);
      high = mid - 1;
    } else return mid;
  }

  return -1;
};
// console.log(binarySearch([1, 2, 3, 4, 5], 2));
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     95
//   )
// );
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     10
//   )
// );
// console.log();

// udemy 인강 코드
const binarySearch2 = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    // console.log(start, middle, end);
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
};
// console.log(binarySearch2([2, 5, 6, 9, 13, 15, 28, 30], 6));

// Naive String Search - udemy - 긴 문자열에서 짧은 문자열이 등장하는 횟수 카운팅
const naiveSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
};
console.log(naiveSearch("lorie loled", "lol"));
