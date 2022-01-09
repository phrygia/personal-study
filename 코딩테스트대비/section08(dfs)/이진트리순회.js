const solution = (n) => {
  let answer;
  const dfs = (n) => {
    if (n > 7) return;
    else {
      console.log(n); // 전위
      dfs(n * 2);
      //   console.log(n); // 중위
      dfs(n * 2 + 1);
      //   console.log(n); // 후위
    }
  };
  dfs(n);

  return answer;
};
console.log(solution(1));
