
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length) {
        return false
    }
    if (!matrix[0].length) {
        return false;
    }

    const w = matrix[0].length;
    const h = matrix.length;

    // 嵌套的二分查找，先查找区间，再查找确定的值
    const binarySearchInterval = (matrix, baseIndex) => {
        if (matrix.length) {
            if (
                matrix.length === 1
            ) {
                const min = matrix[0][0];
                const max = matrix[0][w - 1];
                if (
                    (target > min && target < max) ||
                    target === min ||
                    target === max
                ) {
                    intervalIndex = baseIndex;
                }
            } else if (matrix.length > 1) {
                const centerIndex = Math.floor(matrix.length / 2);
                const center = matrix[centerIndex];
                const min = center[0];
                const max = center[w - 1];
                const left = matrix.slice(0, centerIndex);
                const right = matrix.slice(centerIndex + 1);
                if (
                    (target > min && target < max) ||
                    target === min ||
                    target === max
                ) {
                    intervalIndex = centerIndex + baseIndex
                } else if (target < min) {
                    binarySearchInterval(left, baseIndex)
                } else if (target > max) {
                    binarySearchInterval(right, baseIndex + left.length + 1)
                }
            }
        }
    }

    const binarySearch = (arr) => {
        const centerIndex = Math.floor(arr.length / 2);
        const center = arr[centerIndex];
        const left = arr.slice(0, centerIndex);
        const right = arr.slice(centerIndex + 1);
        if (center === target) {
            return true
        } else if (target < center && left.length) {
            return binarySearch(left)
        } else if (target > center && right.length) {
            return binarySearch(right)
        } else {
            return false
        }
    }    

    let intervalIndex = -1;

    binarySearchInterval(matrix, 0)

    if (intervalIndex === -1) {
        return false
    } else {
        return binarySearch(matrix[intervalIndex]); 
    }
};
