// 局部有序数组使用二分查找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result = -1

    const isOrder = (arr) => {
        const start = arr[0]
        const end = arr[arr.length - 1]
        return start < end
    }

    const binarySearch = (start, end) => {
        if (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            const midd = nums[middIndex]
            const left = nums.slice(start, middIndex)
            const right = nums.slice(middIndex + 1)
            if (midd === target) {
                result = middIndex
                return
            } else {
                // 如果left有序
                if (isOrder(left) && (left[0] <= target && left[left.length - 1] >= target)) {
                    binarySearch(start, middIndex - 1)
                } else {
                    binarySearch(middIndex + 1, end)
                }
                // 如果right有序
                if (isOrder(right) && (right[0] <= target && right[right.length - 1] >= target)) {
                    binarySearch(middIndex + 1, end)
                } else {
                    binarySearch(start, middIndex - 1)
                }
            }
        }
    }

    binarySearch(0, nums.length - 1)

    return result
};