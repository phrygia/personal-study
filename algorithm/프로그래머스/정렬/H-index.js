// https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

function solution(citations) {
    citations.sort((a, b) => b - a);
    console.log(citations);
    let i = 0;
    while (i + 1 <= citations[i]) {
        i++;
        // console.log(i, i + 1, citations[i]);
    }
    return i;
}
// console.log(solution([3, 0, 6, 1, 5])); // 3
// console.log(solution([0, 0, 0, 0, 0])); //0
// console.log(solution([9, 9, 9, 12])); //4
// console.log(solution([9, 7, 6, 2, 1])); // 3
// console.log(solution([10, 8, 5, 4, 3])); //4
console.log(solution([25, 8, 5, 3, 3])); // 3
