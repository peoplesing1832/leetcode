/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const subsets = [];
    const subsetLength = parseInt(new Array(nums.length).fill(1).join(''), 2);

    for (let i = 0; i <= subsetLength; i++) {
        const subset = [];
        for (let j = 0; j < nums.length; j++) {
            if (
                i & (1 << j)
            ) {
               subset.push(nums[j]) 
            }
        }
        subsets.push(subset);
    }

    return subsets;
};