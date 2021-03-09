/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const n = nums.length - 1
    let result = null

    nums.sort((a, b) => a - b)

    const binarySearch = (start, end) => {
        if (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            const midd = nums[middIndex]
            if (midd === nums[middIndex + 1] || midd === nums[middIndex - 1]) {
                result = midd
                return
            } else if (midd > middIndex) {
                // 在右边
                binarySearch(middIndex + 1, end, )
            } else if (midd <= middIndex) {
                // 在左边
                binarySearch(start, middIndex - 1)
            }
        }
    }

    binarySearch(0, nums.length - 1, nums)

    return result
};

