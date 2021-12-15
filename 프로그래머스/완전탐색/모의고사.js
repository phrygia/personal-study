// https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

function solution(answers) {
	let people = [
		[1, 2, 3, 4, 5], // 5
		[2, 1, 2, 3, 2, 4, 2, 5], //8
		[3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 10
	];

	let answer = answers.reduce(
		(acc, cur, idx) => {
			if (cur === people[0][idx % 5]) acc[0]++;
			if (cur === people[1][idx % 8]) acc[1]++;
			if (cur === people[2][idx % 10]) acc[2]++;
			return acc;
		},
		[0, 0, 0]
	);

	const max = Math.max.apply(null, answer);
	return answer.reduce((acc, cur, idx) => {
		if (cur === max) acc.push(idx + 1);
		return acc;
	}, []);
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
