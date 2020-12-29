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
            return null
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
