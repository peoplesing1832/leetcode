// 比较简单的二分法
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0
    }

    if (x === 1) {
        return 1
    }

    let result = null

    const binarySearch = (start, end) => {
        if (start <= end) {
            const midd = Math.floor(((start + end) / 2))
            const sum = midd ** 2
            if (sum === x) {
                result = midd
                return
            } else if (sum > x) {
                binarySearch(start, midd - 1)
            } else if (sum < x) {
                result = result !== null ? Math.max(result, midd) : midd
                // 继续查找
                binarySearch(midd + 1, end)
            }
        }
    }

    binarySearch(1, x)

    return result
};
