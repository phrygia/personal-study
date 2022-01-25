function solution(numbers, hand) {
    var answer = '';
    const keyPad = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        '*': [3, 0],
        0: [3, 1],
        '#': [3, 2],
    };
    let left = keyPad['*'];
    let right = keyPad['#'];

    // const keyPad = [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9],
    //     ['*', 0, '#'],
    // ];

    for (const x of numbers) {
        let [i, j] = keyPad[x];

        if (j === 0) {
            answer += 'L';
            left = keyPad[x];
        } else if (j === 2) {
            answer += 'R';
            right = keyPad[x];
        } else {
            //왼쪽 손가락 위치와 현재 i,j의 떨어진 거리 계산(절대값 이용)
            let tmpL = Math.abs(i - left[0]) + Math.abs(j - left[1]);
            //오른쪽 손가락 위치와 현재 i,j의 떨어진 거리 계산(절대값 이용)
            let tmpR = Math.abs(i - right[0]) + Math.abs(j - right[1]);

            console.log(x, keyPad[x], left, right, tmpL, tmpR);

            if (tmpL > tmpR) {
                answer += 'R';
                right = keyPad[x];
            } else if (tmpL < tmpR) {
                answer += 'L';
                left = keyPad[x];
            } else if (tmpL === tmpR) {
                if (hand === 'left') {
                    answer += 'L';
                    left = keyPad[x];
                } else {
                    answer += 'R';
                    right = keyPad[x];
                }
            }
        }
    }

    return answer;
}

// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // LRLLRRLLLRR
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
