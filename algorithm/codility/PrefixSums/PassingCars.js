function solution(A) {
    let zeroCnt = 0;
    let carCnt = 0;

    for (let i in A) {
        if (A[i] === 0) zeroCnt++;
        // zeroCnt = 1, 2
        else carCnt += zeroCnt; // carCnt = 1, 3, 5

        if (carCnt > 1000000000) return -1;
    }

    return carCnt;
}
/*
    p = 동쪽
    Q = 서쪽 
    0 <= P < Q <N
    (P, Q) // 동,서
*/

console.log(solution([0, 1, 0, 1, 1]));

//
