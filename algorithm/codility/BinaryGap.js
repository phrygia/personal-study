function solution(N) {
    if (N === 0) return 0;

    let answer = [];
    const binary = N.toString(2);

    let help = '';
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') help += binary[i];
        else {
            if (i !== 0) {
                answer.push(help);
                help = '';
            }
        }
    }

    return answer.reduce((acc, cur) => {
        if (cur.length > acc) acc = cur.length;
        return acc;
    }, 0);
}

// console.log(solution(1041)); // 5
// console.log(solution(20)); // 1
// console.log(solution(529)); // 4
// console.log(solution(15)); // 1
// console.log(solution(32)); // 1

//gap
//length

function solution2(N) {
    const binary = N.toString(2);
    const trimmed = binary.substr(0, binary.lastIndexOf('1') + 1);
    return Math.max(...trimmed.split('1').map((item) => item.length));
}

console.log(solution2(1041)); // 5
console.log(solution2(20)); // 1
console.log(solution2(529)); // 4
console.log(solution2(15)); // 1
console.log(solution2(32)); // 1
