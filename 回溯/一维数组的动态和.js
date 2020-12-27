/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum1 = function(nums) {
    // 使用递归的方式解决
    const result = [];

    const fn = (index) => {
        if (index === 0) {
            result[index] = nums[index]
            return nums[index];
        } else {
            result[index] = fn(index - 1) + nums[index]
            return result[index];
        }
    }

    fn(nums.length - 1)

    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum2 = function(nums) {
    // 使用动态规划的方式解决
    // dp[i] = nums[i] + dp[i - 1]

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const n = result[i - 1] || 0;
        const m = nums[i]
        result[i] = n + m
    }

    return result;
};
