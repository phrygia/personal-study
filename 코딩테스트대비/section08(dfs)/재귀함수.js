function solution(n) {
  f(n);
}

const f = (n) => {
  if (n === 0) return;
  else {
    f(n - 1);
    console.log(n);
  }
};
console.log(solution(3));
