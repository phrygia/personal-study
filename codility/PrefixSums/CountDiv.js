function solution(A, B, K) {
  if (A === 0) return parseInt(B / K) + 1;
  else return parseInt(B / K) - parseInt((A - 1) / K);

  console.log(B / K, A - 1, (A - 1) / K);
  if (A === 0) return B / K + 1;
  else return B / K - (A - 1) / K;
  // B전에 나오는 K의 배수 - A 이전에 나오는 K의 배수
}

// O(1)
// console.log(solution(6, 11, 2));
// console.log(solution(0, 0, 1));
// console.log(solution(1, 1, 11));
console.log(solution(0, 13, 2));
// 0, 1, 2, 3, 4, 5, 6, 7, ,8 ,9 ,10,11,12,13
