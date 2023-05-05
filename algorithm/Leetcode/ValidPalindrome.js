// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
    const d = s.split('').reduce((acc, cur) => {
        const str = cur.toLowerCase().charCodeAt();
        if ((str >= 97 && str <= 122) || (str >= 48 && str <= 57))
            acc.push(cur.toLowerCase());
        return acc;
    }, []);

    if (d.length === 0) return true;

    const half = Math.floor(d.length / 2);
    let ar1 = d.slice(0, half);
    let ar2;

    if (d.length % 2 === 0) ar2 = d.slice(half, d.length);
    else ar2 = d.slice(half + 1, d.length);

    for (let i = 0; i < ar1.length; i++) {
        if (ar1[i] !== ar2[ar1.length - 1 - i]) return false;
    }

    return true;
};

function isPalindrome2(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    console.log(s);

    let left = 0;
    right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome2('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('race a car'));
// console.log(isPalindrome(' '));
// console.log(isPalindrome2('0P'));
