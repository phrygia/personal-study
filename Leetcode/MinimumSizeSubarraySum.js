// https://leetcode.com/problems/minimum-size-subarray-sum/

// 슬라이딩 윈도우
var minSubArrayLen = function (target, nums) {
    let length = Number.MAX_SAFE_INTEGER;
    let start = 0;
    let sum = 0;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];
        while (sum >= target) {
            length = Math.min(length, end - start + 1);
            sum -= nums[start];
            start++;
        }
    }

    return length === Number.MAX_SAFE_INTEGER ? 0 : length;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
