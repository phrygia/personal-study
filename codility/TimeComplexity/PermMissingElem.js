function solution(A) {
  const len = A.length;
  if (len === 0) return 1;
  else {
    const total = ((len + 1) * (len + 2)) / 2;
    const missum = A.reduce((acc, cur) => acc + cur, 0);
    return total - missum;
  }
}

// const len = A.length;
// if (len === 0) return 1;

// // (5 * 6) - 15
// const realSum = ((len + 1) * (len + 2)) / 2;
// const missum = A.reduce((acc, cur) => acc + cur, 0);

// return realSum - missum;
console.log(solution([1, 2, 3, 5])); // 1.2.3.4.5
5 * 6;
