
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 示例 1：
// 输入：[3,2,3]
// 输出：3

// 示例 2：
// 输入：[1, 2, 3, 4, 4, 4]
// [1, 4, 3, 2, 4, 5] [4, 4, 4]
// 
// 输出：2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    const counter = (arr, target) => {
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                count += 1
            }
        }
        return count
    }

    const divideAndConquer = (arr) => {
        if (arr.length === 1) {
            return arr[0]
        }

        if (arr.length === 2) {
            if (arr[0] === arr[1]) {
                return arr[0]
            } else {
                return null
            }
        }

        const middIndex = Math.floor(arr.length / 2)
        const left = arr.slice(0, middIndex)
        const right = arr.slice(middIndex)
        const leftMode = divideAndConquer(left)
        const rightMode = divideAndConquer(right)

        console.log(leftMode, left, rightMode, right)
        
        if (leftMode === null && rightMode !== null) {
            return rightMode
        } else if (leftMode !== null && rightMode === null) {
            return leftMode
        } else if (leftMode === null && rightMode === null) {
            return null
        } else {
            // 需要判断下记数
            let counterLeft = counter(arr, leftMode)
            let counterRight = counter(arr, rightMode)
            return counterLeft > counterRight ? leftMode : rightMode;
        }
    }

    return divideAndConquer(nums)
};

majorityElement([6,6,6,7,7])
