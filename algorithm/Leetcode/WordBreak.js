// https://leetcode.com/problems/word-break/

var wordBreak = function (s, wordDict) {
    const set = new Set();

    // wordDict = wordDict.sort((a, b) => {
    //     return a.length - b.length;
    // });

    for (let i = 0; i < wordDict.length; i++) {
        if (!set.has(wordDict[i])) set.add(wordDict[i]);
    }

    // while (true) {
    for (const key of set) {
        const pattern = new RegExp(key);
        if (pattern.test(key)) {
            
            console.log('d');
        }
        console.log(pattern);
    }

    // if (!set.has(s)) break;
    // }

    if (s === '') return true;
    else return false;
};
// console.log(wordBreak('aaaaaaa', ['aaaa', 'aaa']));
console.log(wordBreak('cars', ['car', 'ca', 'rs']));
// console.log(wordBreak('leetcode', ['leet', 'code']));
// console.log(wordBreak('applepenapple', ['apple', 'pen']));
// console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
