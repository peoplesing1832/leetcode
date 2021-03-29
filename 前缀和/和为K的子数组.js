/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0
    let preSum = 0
    // 记录前缀和出现的次数, 0:1, 是为了排除preSum已经等于k的情况
    let hash = {0: 1}

    for (let i = 0; i < nums.length; i++) {
        preSum += nums[i]
        const key = preSum - k
        if (hash[key]) {
            count += hash[key]
        }

        if (!hash[preSum]) {
            hash[preSum] = 1
        } else {
            hash[preSum] += 1
        }    
    }

    return count
};
