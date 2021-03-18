/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    
    const pre = []
    let count = 0
    
    // 构建前缀和数组
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i]
        const b = pre[i - 1] === undefined ? 0 : pre[i - 1]
        pre[i] = a + b
    }

    // 使用前缀和，可以快速获得区间和
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j <= i; j++) {
            let intervalSum;
            if (j === 0) {
                intervalSum = pre[i]
            } else if (j === i) {
                intervalSum = nums[i]
            } else {
                intervalSum = pre[i] - pre[j - 1]
            }
            if (intervalSum === k) {
                count += 1
            }
        }
    }

    return count
};
