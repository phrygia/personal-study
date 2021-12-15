// https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

function solution(brown, yellow) {
	// 가로 + 세로
	const sum = Math.floor(brown / 2) + 2;

	// 세로길이 <= 가로길이
	// brown / 2 = 가로 + 세로 - 2
	// 가로 + 세로 = brown / 2 + 2
	for (let i = 3; 2 * i <= sum; i++) {
		console.log(i, sum, i - 2, sum - i - 2);
		if ((i - 2) * (sum - i - 2) === yellow) {
			return [sum - i, i];
		}
	}
}
// console.log(solution(10, 2));
// console.log(solution(8, 1));
console.log(solution(24, 24));

/*
[0,0] [0,1] [0,2]
[1,0] [1,1] [1,2]
[2,0] [2,1] [2,2]



[0,0] [0,1] [0,2] [0,3] [0,4] [0,5] [0,6] [0,7]
[1,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,6] [1,7] 
[2,0] [2,1] [2,2] [2,3] [2,4] [2,5] [2,6] [2,7] 
[3,0] [3,1] [3,2] [3,3] [3,4] [3,5] [3,6] [3,7] 
[4,0] [4,1] [4,2] [4,3] [4,4] [4,5] [4,6] [4,7] 
[5,0] [5,1] [5,2] [5,3] [5,4] [5,5] [5,6] [5,7] 
*/
