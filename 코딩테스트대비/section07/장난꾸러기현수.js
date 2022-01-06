const soluction = (arr) => {
    // return arr;
    let answer = [];
    const ar = [...arr].sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (ar[i] !== arr[i]) answer.push(i + 1);
        if (answer.length === 2) break;
    }
    return answer;
};
// console.log(soluction([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(soluction([120, 130, 150, 150, 130, 150]));

// 현수, 짝꿍 반번호 출력
