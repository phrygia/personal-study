const solution = (n) => {
  let answer = "";

  const f = (n) => {
    if (n === 0) return;
    else {
      f(Math.floor(n / 2));
      answer += n % 2;
    }
  };
  f(n);

  return answer;
};

// const f = (n, answer) => {
//   if (n === 0) return;
//   else {
//     f(Math.floor(n / 2));
//     answer += n % 2;
//   }
//   return answer;
// };
console.log(solution(11));
