function solution(X, A) {
  const pos = new Set();
  for (let i = 0; i < A.length; i++) {
    pos.add(A[i]);
    console.log(pos);
    if (pos.size === X) return i;
  }

  return -1;
}
console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
