function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === A[i + 1]) {
      A[i] = "";
      A[i + 1] = "";
      i++;
    }
  }

  for (const key of A) {
    if (key !== "") return key;
  }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
