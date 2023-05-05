// https://leetcode.com/problems/merge-intervals/

var merge = function (intervals) {
    // console.log(intervals.sort((a, b) => a[0] - b[0]));
    if (intervals.length == 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);
    let stack = [];
    stack.push(intervals[0]);
    // console.log(stack);

    for (let i = 1; i < intervals.length; i++) {
        let prev = stack.pop();
        let cur = intervals[i];
        // console.log(prev[1], cur[0]);
        // intervals[i] = [starti, endi]
        if (prev[1] >= cur[0]) {
            stack.push([prev[0], Math.max(prev[1], cur[1])]);
        } else {
            stack.push(prev, cur);
        }
    }

    return stack;
};

console.log(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ])
);
// console.log(
//     merge([
//         [1, 4],
//         [4, 5],
//     ])
// );
