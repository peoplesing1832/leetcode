// 局部有序数组, 存在重复的元素
// 存在重复元素的会导致我们在分割数组的时候，无法区分那边是有序的，那边是无序的。无法区分有序就意味我们无法，舍弃一半。
// 11 0 01
// 1 1 1 1 2 2 3 -旋转后-> 1,3,1,1,1,2,2 -二分分割-> [1 3 1, 1, 1 2 2] 我们无法区分两个那边是有序的

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let result = false

    const isOrder = (arr) => {
        arr = [...arr]
        let start = arr[0]
        let end = arr[arr.length - 1]
        if (start === end) {
            // 去除重复的元素
            // 如果数组中，都是同一个元素也是有序的
            while (arr.length) {
                arr.shift()
                start = arr[0]
                end = arr[arr.length - 1]
                if (start !== end) {
                    return start < end
                }
            }
            return true
        } else {
            return start < end
        }
    }

    const binarySearch = (start, end) => {
        if (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            const midd = nums[middIndex]
            const left = nums.slice(start, middIndex)
            const right = nums.slice(middIndex + 1)
            if (midd === target) {
                result = true
                return
            } else {
                // 如果left有序，并且target在left区间之间
                if (isOrder(left) && (left[0] <= target && left[left.length - 1] >= target)) {
                    binarySearch(start, middIndex - 1)
                } else {
                    binarySearch(middIndex + 1, end)
                }
                // 如果right有序，并且target在right区间之间
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
