/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const matrix = [];

    for (let i = 0; i < n; i++) {
        matrix.push([]);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matrix[i][j] = 0
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0) {
                matrix[i][j] = 1 
            } else if (j === 0) {
                matrix[i][j] = 1
            } else {
                matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
            }
        }
    }

    return matrix[n - 1][m - 1]
};