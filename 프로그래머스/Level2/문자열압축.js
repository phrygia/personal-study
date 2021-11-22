// https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript

function solution(s) {
	const len = s.length;
	if (len === 1) return 1;
	let min = 1000;
	for (let i = 1; i <= len / 2; i++) {
		let str1 = '';
		let str2 = '';
		let ans = '';
		let count = 1;

		for (let j = 0; j < len; j += i) {
			if (j === 0) str1 = s.slice(j, j + i);
			else {
				str2 = s.slice(j, j + i);
				if (str1 === str2) {
					count++;
					if (j + i === len) ans += `${count}${str1}`;
				} else {
					if (count > 1) ans += `${count}${str1}`;
					else ans += str1;
					count = 1;
					if (str1.length > str2.length) ans += str2;
					str1 = str2;
					if (j + i === len) ans += str2;
				}
			}
		}
		min = Math.min(ans.length, min);
	}

	return min;
}
console.log(solution('aabbaccc'));
console.log(solution('ababcdcdababcdcd'));
console.log(solution('abcabcdede'));
console.log(solution('abcabcabcabcdededededede'));
console.log(solution('xababcdcdababcdcd'));
