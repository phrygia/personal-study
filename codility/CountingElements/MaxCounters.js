function solution(N, A) {
    let counter = Array(N).fill(0);
    let max = 0; //  counters[N] 값들 중의 최대 값
    let lastMax = 0; // : A[i]의 값이 N보다 클 경우(N+1 일 경우)의 max 값

    for (let i = 0; i < A.length; i++) {
        let x = A[i];

        if (x <= N) {
            console.log(x, counter, counter[x - 1], lastMax);
            //counters의 값이 lastMax보다 작으면 우선 lastMax 값으로 세팅
            if (counter[x - 1] < lastMax) {
                counter[x - 1] = lastMax;
            }

            //increase(X) 수행
            counter[x - 1]++;
            console.log('---', counter[x - 1], lastMax, max);

            //     max 값과 비교 후 max값 설정
            if (max < counter[x - 1]) {
                max = counter[x - 1];
            }
        } else {
            // A[i]의 값이 N보다 클 경우
            // lastMax 값을 현재의 max 값으로 설정
            lastMax = max;
        }
    }

    // console.log(counter, lastMax);

    for (let i = 0; i < N; i++) {
        if (counter[i] < lastMax) {
            counter[i] = lastMax;
        }
    }

    // console.log(counter);

    return counter;
}
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
// console.log(solution())

// (3, 2, 2, 4, 2)
