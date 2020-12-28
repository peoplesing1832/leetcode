/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 1 || prices.length === 0) {
        return 0
    }

    // 获取横跨中间的最大值
    const getMiddMax = (left, right) => {
        let leftMax = Number.MAX_SAFE_INTEGER
        let rightMax = Number.MIN_SAFE_INTEGER
        for (let i = left.length - 1; i >= 0; i--) {
            leftMax = Math.min(left[i], leftMax)
        }
        for (let i = 0; i < right.length; i++) {
            rightMax = Math.max(right[i], rightMax)
        }
        return rightMax - leftMax
    }

    const divideAndConquer = (arr) => {
        if (arr.length === 2) {
            return arr[1] - arr[0]
        } else if (arr.length > 2) {
            const middIndex = Math.floor(arr.length / 2)
            const left = arr.slice(0, middIndex)
            const right = arr.slice(middIndex)
            const middMax = getMiddMax(left, right)
            const leftMax = left.length === 1 ? Math.max(divideAndConquer(left), left[left.length - 1] - left[0]) : 0
            const rightMax = right.length === 1 ? Math.max(divideAndConquer(right), right[right.length - 1] - right[0]) : 0
            return Math.max(middMax, leftMax, rightMax)
        }
    }

    return divideAndConquer(prices)
};
