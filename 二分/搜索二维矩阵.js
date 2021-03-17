/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) {
        return false
    }

    if (matrix[0].length === 0) {
        return false
    }

    let interval = null; 
    let result = false;

    const binarySearchInterval = (start, end) => {
        if (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            const midd = matrix[middIndex]
            const l = midd[0]
            const r = midd[midd.length - 1]
            if (target > l && target < r) {
                interval = midd
            } else if (target < l) {
                binarySearchInterval(start, middIndex - 1)
            } else if (target > r) {
                binarySearchInterval(middIndex + 1, end)
            } else if (target === l || target === r) {
                result = true
            }
        }
    }

    const binarySearch = (start, end) => {
        if (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            const midd = interval[middIndex]
            if (midd === target) {
                result = true
            } else if (midd > target) {
                binarySearch(start, middIndex - 1)
            } else if (midd < target) {
                binarySearch(middIndex + 1, end)
            }
        }
    }

    binarySearchInterval(0, matrix.length - 1)

    if (result) {
        return result
    }

    if (!interval) {
        return false
    }

    binarySearch(0, interval.length - 1)

    return result;
};

searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)