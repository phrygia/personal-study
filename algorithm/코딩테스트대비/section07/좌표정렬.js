const soluction = (arr) => {
    arr.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        else return a[0] - b[0];
    });
    // arr.sort((a, b) => a[1] - b[1]);

    return arr;
};
console.log(
    soluction([
        [2, 7],
        [1, 3],
        [1, 2],
        [2, 5],
        [3, 6],
    ])
);
