// https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript

function solution(numbers) {
    numbers = numbers
        .map((val) => String(val))
        .sort((a, b) => {
            console.log(a, b, b + a, a + b, b + a - (a + b));
            return b + a - (a + b);
        })
        .join('');
    return numbers[0] === '0' ? '0' : numbers;
}
// console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
