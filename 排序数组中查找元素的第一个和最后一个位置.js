/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) { 

    const result = [];

    const binarySearch = (arr, target, baseLength) => {
        if (!arr.length) {
            return -1;
        }
        const len = arr.length;
        const centerIndex = Math.floor(len / 2);
        const center = arr[centerIndex];
        const left = arr.slice(0, center - 1);
        const right = arr.slice(center);
        if (target === center) {
            return centerIndex + baseLength;
        } else if (target < center) {
            return binarySearch(left, target, 0);
        } else if (target > center) {
            return binarySearch(right, target, left.length + 1);
        } 
    }

    // nums是已经排过序的
    const index = binarySearch([...nums], target, 0);

    if (index === -1) {
        result.push(-1)
        result.push(-1)
    } else {
        if (nums[index] === nums[index - 1]) {
            result.push(index - 1)
            result.push(index)
        } else if (nums[index] === nums[index + 1]) {
            result.push(index)
            result.push(index + 1)
        } else {
            result.push(index)
            result.push(-1)
        }
    }

    return result;
};
