const soluction = (m, arr) => {
    let answer = 0;

    arr.sort((a, b) => a - b);

    let lt = 0;
    let rt = arr.length - 1;

    while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2);
        console.log(lt, rt, mid, arr[mid]);
        if (arr[mid] === m) {
            answer = mid + 1;
            break;
        } else if (arr[mid] > m) rt = mid - 1;
        else lt = mid + 1;
    }

    console.log(arr);

    return answer;
};
console.log(soluction(87, [23, 87, 65, 12, 57, 32, 99, 81]));
