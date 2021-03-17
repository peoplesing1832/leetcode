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

    const sortBloomDay = [...new Set(bloomDay)].sort((a, b) => a - b)
    
    let result = null

    // 是否可以制作完成，如果第n天不能完成m朵画，那么n-1, n-2天肯定也不能完成
    const isOk = (n) => {
        let temp = 0
        let count = 0
        for (let i = 0; i < bloomDay.length; i++) {
            const t = bloomDay[i]
            if (t <= n) {
                temp += 1
                if (temp === k) {
                    count += 1
                    temp = 0
                }
            } else {
                if (temp !== 0) {
                    temp = 0
                }
            }
        }
        if (count >= m) {
            return true
        }
        return false
    }

    const binarySearch = (start, end) => {
        if (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            const midd = sortBloomDay[middIndex]
            if (isOk(midd)) {
                result = midd
                // 需要查找最小的，在往下查找
                binarySearch(start, middIndex - 1);
                return
            } else {
                binarySearch(middIndex + 1, end);
            }
        }
    }


    binarySearch(0, sortBloomDay.length - 1)

    return result
};
