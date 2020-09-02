/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let prevIndex = -1
    let i = 0
    for (i = 0; i < nums.length; i++) {
        if (prevIndex >= 0) {
            if (nums[prevIndex] === nums[i]) {
                nums.splice(i, 1);
                i -= 2;
                prevIndex -= 1;
            } else {
                prevIndex = i
            }
        } else {
            prevIndex = i
        }
    }
    return nums.length
};