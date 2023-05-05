const soluction = (m, arr) => {
    let answer = 0;
    arr.sort((a, b) => a - b);

    let lt = arr[arr.length - 1];
    let rt = arr.reduce((acc, cur) => (acc += cur), 0);

    while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2);

        if (conut(arr, mid) <= m) {
            answer = mid;
            rt = mid - 1;
        } else lt = mid + 1;

        // for (let i = 0; i < arr.length; i++) {
        //     if ((cnt += arr[i]) <= mid) cnt += arr[i];
        //     else {
        //         cnt = 0;
        //         cnt += arr[i];
        //         answer++;
        //     }
        // }
        // if (answer === m) {
        //     answer = mid;
        //     break;
        // } else {
        //     rt = mid - 1;
        //     answer = 0;
        // }
    }
    return answer;
};

const conut = (songs, capacity) => {
    let cnt = 1;
    let sum = 0;

    for (const x of songs) {
        if (sum + x > capacity) {
            cnt++;
            sum = x;
        } else sum += x;
    }
    return cnt;
};
console.log(soluction(3, [1, 2, 3, 4, 5, 6, 7, 9, 8]));

// 9 ~ 45
