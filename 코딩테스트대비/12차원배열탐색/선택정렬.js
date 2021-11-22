// https://www.inflearn.com/course/자바스크립트-알고리즘-문제풀이/lecture/64083?tab=note

// N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 선택정렬입니다.

function soluction(ar) {
	let idx = 0;

	while (true) {
		let result = ar[idx];
		let id = 0;
		let change = false;
		for (let i = idx; i < ar.length; i++) {
			if (ar[i] < result) {
				result = ar[i];
				id = i;
				change = true;
			}
		}
		if (change) {
			const tmp = ar[id];
			ar[id] = ar[idx];
			ar[idx] = tmp;
		}
		idx++;

		if (idx === ar.length - 1) break;
	}
	return ar;
}

function soluction2(ar) {
	let answer = ar;

	for (let i = 0; i < ar.length - 1; i++) {
		let idx = i;
		for (let j = i + 1; j < ar.length; j++) {
			if (ar[j] < ar[idx]) idx = j;
		}
		[ar[i], ar[idx]] = [ar[idx], ar[i]];
	}
	return answer;
}
console.log(soluction2([13, 5, 11, 7, 23, 15]));
