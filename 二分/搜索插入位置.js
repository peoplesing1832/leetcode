/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result = null

    const binarySearch = (start, end) => {
        if (start <= end) {
            const mi = Math.floor(((start + end) / 2))
            const m = nums[mi]
            if (m === target) {
                result = mi
                return
            } else if (m < target) {
                result = mi + 1
                binarySearch(mi + 1, end)
            } else {
                result = mi
                binarySearch(start, mi - 1)
            }
        }
    }

    binarySearch(0, nums.length - 1)

    return result
};