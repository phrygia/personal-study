const soluction = (n, arr) => {
  let answer = 0;

  arr.sort((a, b) => a - b);
  let lt = 1;
  let rt = arr[arr.length - 1];

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (count(arr, mid) >= n) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }

  return answer;
};
const count = (arr, dist) => {
  let cnt = 1;
  let ep = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= dist) {
      cnt++;
      ep = arr[i];
    }
  }
  console.log("cnt", cnt);
  return cnt;
};
console.log(soluction(3, [1, 2, 8, 4, 9]));
// console.log(soluction(3, [5, 6, 8, 12, 14]));

// 1 2 4 8 9

// lt = 1
// rt = 9
