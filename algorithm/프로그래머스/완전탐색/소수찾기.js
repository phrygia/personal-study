// https://programmers.co.kr/learn/courses/30/lessons/42839?language=javascript

function solution(numbers) {
  let answer = 0;
  number = numbers.split("").sort((a, b) => b + a - (a + b));
  console.log(number);
  //   for (let i = 0; i < numbers.length; i++) {}
  return answer;
}
console.log(solution("17"));
// console.log(solution('011'));
