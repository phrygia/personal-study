function solution(A, K) {
  const rotationNum = K > A.length ? K % A.length : K;

  //   console.log(A.slice(-rotationNum), A.slice(0, A.length - rotationNum));
  console.log(
    rotationNum,
    A.slice(-rotationNum),
    A.slice(0, A.length - rotationNum)
  );

  return rotationNum === 0
    ? A
    : [].concat(A.slice(-rotationNum), A.slice(0, A.length - rotationNum));
}
// console.log(solution([-450, -554, 473, 354], 100));
// console.log(solution([0, 0, 0], 1));
console.log(solution([1, 2, 3, 4], 14));

// [1,2,3,4] [4,1,2,3]
// [4,1,2,3] [3,4,1,2]
// [3,4,1,2] [2,3,4,1]
// [1,2,3,4]
