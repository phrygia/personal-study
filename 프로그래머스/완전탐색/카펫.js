// https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

function solution(brown, yellow) {
  let answer = [];
  const sum = brown + yellow;

  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) {
      let weight = sum / height; // 가로길이
      console.log(sum, weight, height);
      if ((height - 2) * (weight - 2) === yellow) return [weight, height];
    }
  }
  return answer;
}
// console.log(solution(10, 2));
// console.log(solution(8, 1));
console.log(solution(24, 24));
