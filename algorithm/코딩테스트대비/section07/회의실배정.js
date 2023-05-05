const soluction = (arr) => {
    let answer = 0;
    arr.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    console.log(arr);
    let et = 0;
    for (const x of arr) {
        if (x[0] >= et) {
            answer++;
            et = x[1];
        }
    }
    return answer;
};

// 시작시간, 끝나는 시간
console.log(
    soluction([
        [1, 4],
        [2, 3],
        [3, 5],
        [4, 6],
        [5, 7],
    ])
);
console.log(
    soluction([
        [3, 3],
        [1, 3],
        [2, 3],
    ])
);
