/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    if (nums.length < 3) {
        return undefined;
    }

    if (nums.length === 3) {
        return nums[0] + nums[1] + nums[2];
    }

    let closest = Infinity;

    nums = nums.sort((a,b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let start = i + 1;
        let end = nums.length - 1
        while (start < end) {
            const sum = nums[i] + nums[start] + nums[end];
            const diff = target - sum;
            console.log(diff)
            if (diff === 0) {
                return target;
            } else if (target > sum) {
                start += 1;
            } else if (target < sum) {
                end -= 1;
            }
            if (Math.abs(diff) < Math.abs(target - closest)) {
                closest = sum;
            }
        }
    }

    return closest;
};



