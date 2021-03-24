/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let count = 0
    let preSum = 0
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        preSum += nums[i]
        const key = preSum - k
        if (hash[key]) {
           count += hash[key]
        }
        if (preSum === k) {
            count += 1
        }

        // 记录前缀和出现的次数
        if (!hash[preSum]) {
            hash[preSum] = 1
        } else {
            hash[preSum] += 1
        }    
    }

    return count
};
