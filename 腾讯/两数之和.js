/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length < 2) {
        return [];
    }

    const result = [];
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = [];   
        }
        hash[nums[i]].push(i)
    }

    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        const aI = i;
        const b = target - a;
        if (hash[b]) {
            const bIs = hash[b].filter(i => i !== aI);
            if (bIs.length > 0) {
                result.push(aI);
                result.push(bIs[0]);
                break
            }
        } else {
            continue;
        }
    }

    return result;
};