// 1 - 66% 실패
function solution1(A) {
  const arr = new Array(A.length).fill().map((v, i) => i + 1);
  A.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (A.indexOf(arr[i]) !== -1) arr[i] = "";
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") return arr[i];
  }
  return 1;
}

// 2 성공
function solution2(A) {
  const arr = new Array(A.length).fill().map((v, i) => i + 1);
  A.sort((a, b) => a - b);
  const set = new Set([...arr]);

  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i])) {
      set.delete(A[i]);
    }
  }

  if (set.size === 0) return A[A.length - 1] + 1;
  else return [...set][0];
}

// 3 다른 사람 코드
function solution3(A) {
  A.sort((a, b) => a - b);
  let min = 1;

  for (const i in A) {
    if (A[i] > 0 && A[i] === min) min++;
  }
  return min;
}
console.log(solution2([1, 3, 6, 4, 1, 2]));
console.log(solution2([1, 2, 3]));
console.log(solution2([-1, -3]));
