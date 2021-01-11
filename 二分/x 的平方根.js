// 二分法
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result = null

    const binarySearch = (start, end) => {
        if (start <= end) {
            const m = Math.floor(((start + end) / 2))
            if (m ** 2 === x) {
                result = m
            } else if (m ** 2 > x) {
                binarySearch(start, m - 1)
            } else {
                result = result === null ? m : Math.abs(x - (m**2)) < Math.abs(x - (result**2)) ? m : result
                binarySearch(m + 1, end)
            }
        }
    }

    binarySearch(0, x)

    return result
};
