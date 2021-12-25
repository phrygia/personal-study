function solution(A, B, K) {
    console.log(B / K, A - 1, (A - 1) / K);
    if (A === 0) return B / K + 1;
    else return B / K - (A - 1) / K;
    // B전에 나오는 K의 배수 - A 이전에 나오는 K의 배수
}

// 5.5 - 2.5
console.log(solution(6, 11, 2));
// console.log(solution(0, 2000000000, 1));
// console.log(solution(1, 1, 1));
// console.log(solution(100, 123456789, 2)); // 61728345
// console.log(solution(0, 0, 11));

// 6, 7, 8, 9, 10, 11
// 6,8,10
