/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let startIndex = -1;
    let endIndex = -1;

    const binarySearchEndPosition = (start, end) => {
        if (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            const midd = nums[middIndex]
            if (midd === target) {
                endIndex = Math.max(endIndex, middIndex)
                binarySearchEndPosition(middIndex + 1, end)
            } else if (midd < target) {
                binarySearchEndPosition(middIndex + 1, end)
            } else if (midd > target) {
                binarySearchEndPosition(start, middIndex - 1)
            }
        }
    }

    const binarySearchStartPosition = (start, end) => {
        if (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            const midd = nums[middIndex]
            if (midd === target) {
                startIndex = startIndex === -1 ? middIndex : Math.min(startIndex, middIndex)
                binarySearchStartPosition(start, middIndex - 1)
            } else if (midd < target) {
                binarySearchStartPosition(middIndex + 1, end)
            } else if (midd > target) {
                binarySearchStartPosition(start, middIndex - 1)
            }
        }
    }

    binarySearchEndPosition(0, nums.length - 1)
    binarySearchStartPosition(0, nums.length - 1)

    return [startIndex, endIndex]
};