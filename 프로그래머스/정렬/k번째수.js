// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

function solution(array, commands) {
    let answer = [];

    for (let x = 0; x < commands.length; x++) {
        let ar = [];
        const [i, j, k] = commands[x];

        ar = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(ar[k - 1]);
    }

    return answer;
}
console.log(
    solution(
        [1, 5, 2, 6, 3, 7, 4],
        [
            [2, 5, 3],
            [4, 4, 1],
            [1, 7, 3],
        ]
    )
);
