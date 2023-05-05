const soluction = (arr) => {
    const n = arr.length;

    //  버블정렬
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > 0 && arr[j + 1] < 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};
console.log(soluction([1, 2, 3, -3, -2, 5, 6, -6]));
