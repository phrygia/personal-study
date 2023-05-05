function solution(S, P, Q) {
  return P.reduce((acc, cur, idx) => {
    const st = S.slice(cur, Q[idx] + 1);
    if (st.indexOf("A") !== -1) acc.push(1);
    else if (st.indexOf("C") !== -1) acc.push(2);
    else if (st.indexOf("G") !== -1) acc.push(3);
    else if (st.indexOf("T") !== -1) acc.push(4);
    return acc;
  }, []);
}

// 다른 사람
function solution2(S, P, Q) {
  const type = ["A", "C", "G", "T"];
  const answer = [];
  for (let i = 0; i < P.length; ++i) {
    const subtype = S.substring(P[i], Q[i] + 1);
    const mintypeIdx = type.findIndex((v) => subtype.indexOf(v) != -1);
    answer.push(mintypeIdx + 1);
  }
  return answer;
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
// O(N + M)
// A C G T, 1234
/*



*/
