function solution(A) {
  let answer = Number.MAX_SAFE_INTEGER;

  let left = 0;
  let right = A.reduce((acc, cur) => acc + cur);

  for (let i = 0; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];

    const val = Math.abs(left - right);
    answer = answer > val ? val : answer;
  }

  return answer;
}
console.log(solution([3, 1, 2, 4, 3]));
