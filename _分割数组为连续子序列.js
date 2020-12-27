/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    const num = {};
    const tail = {};

    for (let i = 0; i < nums.length; i++) {
       if (!num[nums[i]]) {
           num[nums[i]] = 1;
           tail[nums[i]] = 0;
       } else {
           num[nums[i]] += 1;
       }
    }

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i]
        if (num[key] === 0) {
            continue
        } else if (num[key] > 0 && tail[key - 1] > 0) {
            num[key] -= 1
            tail[key - 1] -= 1
            tail[key] += 1
        } else if (num[key] > 0 && num[key + 1] > 0 && num[key + 2] > 0) {
            num[key] -= 1
            num[key + 1] -= 1
            num[key + 2] -= 1
            tail[key + 2] += 1
        } else {
            return false
        }
    }
    
    return true
};
