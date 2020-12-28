/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    /**
     * 跨越中间的最大值
     */
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

    const divideAndConquer = (arr) => {
        if (arr.length <= 1) {
            // 得到了最小子问题的解答
            return arr.length === 1 ? arr[0] : Number.MIN_SAFE_INTEGER;
        }
        // 继续拆解子问题
        const middIndex = Math.floor(arr.length / 2)
        const left = arr.slice(0, middIndex)
        const right = arr.slice(middIndex)
        const middMax = getMiddMax(left, right)
        const leftMax = divideAndConquer(left)
        const rightMax = divideAndConquer(right)
        return Math.max(middMax, leftMax, rightMax)
    } 

    return divideAndConquer(nums)
};
