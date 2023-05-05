function solution(A) {
  let min = (A[0] + A[1]) / 2;
  let minIdx = 0;
  for (let i = 1; i < A.length - 1; i++) {
    let two = (A[i] + A[i + 1]) / 2;
    if (i > A.length - 2) {
      if (two < min) {
        min = two;
        minIdx = i;
      }
    } else {
      let three = (A[i] + A[i + 1] + A[i + 2]) / 3;
      if (two < min || three < min) {
        min = two < three ? two : three;
        minIdx = i;
      }
    }
  }
  return minIdx;
}

// slice (P, Q)
//  A[P] + A[P + 1] + ... + A[Q]
console.log(solution([4, 2, 2, 5, 1, 5, 8])); // 1    7개
//  (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).
