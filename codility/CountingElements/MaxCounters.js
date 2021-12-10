function solution(N, A) {
  let counter = Array(N).fill(0);

  for (let i = 0; i < A.length; i++) {
    if (A[i] > N) {
      console.log(A[i], N);
      //   const maxCount = Math.max.apply(null, counter);
      //   counter = Array(N).fill(maxCount);
    } else {
      // counter[A[i] - 1]++;
    }
  }

  return counter;
}
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
// console.log(solution())
