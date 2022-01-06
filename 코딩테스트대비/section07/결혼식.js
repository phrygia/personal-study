const soluction = (arr) => {
    let answer = Number.MIN_SAFE_INTEGER;
    let T_line = [];
    for (const x of arr) {
        T_line.push([x[0], 's']);
        T_line.push([x[1], 'e']);
    }
    console.log(T_line);
    T_line.sort((a, b) => {
        if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
        else return a[0] - b[0];
    });
    console.log(T_line);
    c;
    let cnt = 0;
    for (const x of T_line) {
        if (x[1] === 's') cnt++;
        else cnt--;
        answer = Math.max(answer, cnt);
    }
    return answer;
    // 0 - 72 ( 24 * 3)
};
console.log(
    soluction([
        [14, 18],
        [12, 15],
        [15, 20],
        [20, 30],
        [5, 14],
    ])
);
