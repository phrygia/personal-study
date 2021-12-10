function solution(A) {
  A.sort((a, b) => a - b);
  //   const lange = A[A.length - 1] === A.length ? A[A.length - 1] : A.length;
  //   const arr = Array(lange)
  //     .fill()
  //     .map((val, i) => {
  //       return i + 1;
  //     });

  //   for (let i = 0; i < arr.length; i++) {
  //     if (A[i] !== arr[i]) return 0;
  //   }

  for (let i = A.length - 1; i > 0; i--) {
    if (A[i] - A[i - 1] !== 1) return 0;
  }
  return 1;
}
console.log(solution([4, 1, 3, 2]));
console.log(solution([4, 1, 3]));
console.log(solution([1, 1]));
