// 直接对总时间进行二分查找
/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if (!bloomDay.length) {
        return -1
    }

    if (m * k > bloomDay.length) {
        return -1
    }

    const start = 1
    const end = Math.max(...bloomDay)
    let result = null

    // 是否可以制作完成，如果第n天不能完成，那么n-1天肯定也不能完成
    const isOk = (n) => {

    }

    const binarySearch = (start, end) => {
        if (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            if (isOk(middIndex)) {
                result = middIndex
                return
            } else {
                binarySearch(middIndex + 1, end);
            }
        }
    }

    binarySearch(start, end)

    return result
};