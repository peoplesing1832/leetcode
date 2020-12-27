/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {}

    for (let i = 0; i < nums.length; i += 1) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            return true
        }
    }

    return false
};
