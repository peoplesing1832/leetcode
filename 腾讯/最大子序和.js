/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) {
        return 0
    }

    const dp = [];

    for (let i = 0; i < nums.length; i++) {
        const prev = dp[i - 1] === undefined ? 0 : dp[i - 1];
        const current = nums[i]
        dp[i] = prev > 0 ? current + prev : current;
    }

    const MAX = Math.max(...dp);

    return MAX;
};
