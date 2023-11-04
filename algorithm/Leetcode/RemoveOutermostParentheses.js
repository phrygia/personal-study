var removeOuterParentheses = function (s) {
  let parentheses = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      parentheses.push("(");
      if (s[i - 1] === "(") parentheses.pop();
    } else {
      if (s[i - 1] === "(") parentheses.push(")");
    }
  }
  return parentheses.join("");
};

// console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
// console.log(removeOuterParentheses("()()"));
