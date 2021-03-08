// 行数一定在0和n之间
const getArithmeticSeriesSum = (n, d) => {
    return n + (n * (n - 1) / 2) * d
}

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if (n === 0) {
        return 0
    } 

    if (n === 1) {
        return 1
    }

    let result = null

    const binarySearch = (start, end) => {
        if (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            const sum = getArithmeticSeriesSum(middIndex, 1)
            if (sum === n) {
                result = middIndex
                return
            } else if (sum > n) {
                binarySearch(start, middIndex - 1)
            } else if (sum < n) {
                result = middIndex
                binarySearch(middIndex + 1, end)
            }
        }
    }

    binarySearch(1, n)

    return result
};