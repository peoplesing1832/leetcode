// 无序数组使用二分法求解答
// nums[-1] = nums[n] = -∞ 说明了肯定存在峰值，因为两头是无效小的
// 因为两边是无效小的，即使数组是一直递增的不存在波动，数组的最后一个也是峰值
// 在切割数组后，分值一定在比切割位置大的那一边，或者切割点本身就是峰值
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let result = null

    const binarySearch = (start, end) => {
        if (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            const midd = nums[middIndex]
            const left = nums[middIndex - 1] === undefined ? Number.MIN_SAFE_INTEGER : nums[middIndex - 1]
            const right = nums[middIndex + 1] === undefined ? Number.MIN_SAFE_INTEGER : nums[middIndex + 1]
            if (midd > left && midd > right) {
                result = middIndex
                return
            } else if (right > midd) {
                // 升序
                binarySearch(middIndex + 1, end)
            } else if (left > midd) {
                // 降序
                binarySearch(start, middIndex - 1)
            }
        }
    }

    binarySearch(0, nums.length - 1)

    return result
};
