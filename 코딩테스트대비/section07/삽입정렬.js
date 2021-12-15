const soluction = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > tmp) {
                console.log(arr[j + 1], arr[j]);
                arr[j + 1] = arr[j];
            } else break;
        }
        // console.log('arr[j + 1] : ', arr[j + 1], j);
        arr[j + 1] = tmp;
        // console.log(/'2 arr[j + 1] : ', arr[j + 1]);
    }
    return arr;
};
console.log(soluction([11, 7, 5, 6, 10, 9]));
// , 11, 5, 6
// 7, 5, 11, 6
// 5, 7, 11, 6, 10
