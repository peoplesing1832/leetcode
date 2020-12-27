/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let leftMax = Number.MIN_SAFE_INTEGER
    let middMax = Number.MIN_SAFE_INTEGER
    let rightMax = Number.MIN_SAFE_INTEGER

    const getMiddMax = (left, right) => {
        let leftMax = Number.MIN_SAFE_INTEGER
        let rightMax = Number.MIN_SAFE_INTEGER
        let leftSum = 0
        let rightSum = 0
        for (let i = left.length - 1; i >= 0; i--) {
            leftSum += left[i]
            leftMax = Math.max(leftSum, leftMax)
        }
        for (let i = 0; i < right.length; i++) {
            rightSum += right[i]
            rightMax = Math.max(rightSum, rightMax)
        }
        return rightMax + leftMax
    }

    const getLeftMax = (arr) => {
        const middIndex = Math.floor(arr.length / 2)
        const left = arr.slice(0, middIndex)
        const right = arr.slice(middIndex)
        const midd = getMiddMax(left, right)
        if (left.length > 1) {
            getLeftMax(left)
        } else if (left.length === 1) {
            leftMax = Math.max(leftMax, left[0])
        }
        if (right.length > 1) {
            getLeftMax(right)
        } else if (right.length === 1) {
            leftMax = Math.max(leftMax, right[0])
        }
        middMax = Math.max(middMax, midd)
    }

    const getRightMax = (arr) => {
        const middIndex = Math.floor(arr.length / 2)
        const left = arr.slice(0, middIndex)
        const right = arr.slice(middIndex)
        const midd = getMiddMax(left, right)
        if (left.length > 1) {
            getRightMax(left)
        } else if (left.length === 1) {
            rightMax = Math.max(rightMax, left[0])
        }
        if (right.length > 1) {
            getRightMax(right)
        } else if (right.length === 1) {
            rightMax = Math.max(rightMax, right[0])
        }
        middMax = Math.max(middMax, midd)
    }

    const getMax = (arr) => {
        const middIndex = Math.floor(arr.length / 2)
        const left = arr.slice(0, middIndex)
        const right = arr.slice(middIndex)
        const midd = getMiddMax(left, right)

        if (left.length > 1) {
            getLeftMax(left)
        } else if (left.length === 1) {
            leftMax = Math.max(leftMax, left[0])
        }

        if (right.length > 1) {
            getRightMax(right)
        } else if (right.length === 1) {
            rightMax = Math.max(rightMax, right[0])
        }

        middMax = Math.max(middMax, midd)
    }

    getMax(nums)

    return Math.max(leftMax, middMax, rightMax);
};
