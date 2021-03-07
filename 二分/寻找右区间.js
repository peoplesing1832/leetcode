/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    const arr = []
    // 首先记录原始索引
    const map = new Map()
    for (let i = 0; i < intervals.length; i++) {
        map.set(intervals[i], i)
    }

    // 然后进行排序
    intervals.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i]
        let result = -1
        let start = i
        let end = intervals.length - 1
        while (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            const midd = intervals[middIndex]
            if (midd[0] >= interval[1]) {
                // 符合条件
                result = map.get(midd)
                // 继续查找，因为startj需要最小化
                end = middIndex - 1
            } else {
                // 继续查找
                start = middIndex + 1
            }
        }
        arr[map.get(interval)] = result
    }

    return arr
};

