function solution(N, A) {
  let counter = Array(N).fill(0);
  let max = 0;
  let lastMax = 0;

  for (let i = 0; i < A.length; i++) {
    const x = A[i];
    if (x <= N) {
      if (counter[x - 1] < lastMax) counter[x - 1] = lastMax;

      counter[x - 1]++;

      if (max < counter[x - 1]) max = counter[x - 1];
    } else lastMax = max;
  }

  for (let i = 0; i < counter.length; i++) {
    if (counter[i] < lastMax) counter[i] = lastMax;
  }
  return counter;
}
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
// console.log(solution())

// (3, 2, 2, 4, 2)
