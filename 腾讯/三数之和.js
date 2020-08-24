/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }
    if (nums.length === 3) {
        if (nums[0] + nums[1] + nums[2] === 0) {
            return [nums];
        }
    }

    const result = [];
    const hash = {};

    nums = nums.sort((a,b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        let start = i + 1;
        let end = nums.length - 1
        while (start < end) {
            const target = nums[i] + nums[start] + nums[end];
            if (target === 0) {
                const key = `${nums[i]}-${nums[start]}-${nums[end]}`
                if (!hash[key]) {
                    result.push([nums[i], nums[start], nums[end]]);
                    hash[key] = true;
                }
                start += 1;
                end -= 1;
            } else if (target < 0) {
                start += 1;
            } else if (target > 0) {
                end -= 1;
            }
        }
    }

    return result;
};
