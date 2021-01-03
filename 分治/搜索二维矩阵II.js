/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length) {
        return false
    }
    
    const getBenchmark = (row, col) => {
        return matrix[row][col]
    }

    const divideAndConquer = (row, col) => {
        if (row < 0 || col >= matrix[0].length) {
            return false
        }
        const benchmark = getBenchmark(row, col)
        if (benchmark === target) {
            return true
        } else if (target > benchmark) {
            return divideAndConquer(row, col + 1)
        } else {
            return divideAndConquer(row - 1, col)
        }
    }

    return divideAndConquer(matrix.length - 1, 0)
};