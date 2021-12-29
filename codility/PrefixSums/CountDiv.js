function solution(A, B, K) {
  if (A === 0) return parseInt(B / K) + 1;
  else return parseInt(B / K) - parseInt((A - 1) / K);
}

// O(1)
// console.log(solution(6, 11, 2));
// console.log(solution(0, 0, 1));
// console.log(solution(1, 1, 11));
console.log(solution(0, 13, 2));
// 0, 1, 2, 3, 4, 5, 6, 7, ,8 ,9 ,10,11,12,13
