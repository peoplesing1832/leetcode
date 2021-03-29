/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    // 原矩阵
    this.matrix = matrix
    // 前缀和矩阵
    this.preSum = null

    if (matrix.length === 0 || matrix[0].length === 0) {
        return
    }
    
    // 构建前缀和矩阵
    this.preSum = new Array(this.matrix.length).fill([])
    for (let i = 0; i < this.matrix.length; i++) {
        for (let j = 0; j < this.matrix[0].length; j++) {
            if (i == 0 && j == 0) {
                this.preSum[i][j] = this.matrix[i][j]
            } else if (i == 0) {
                this.preSum[i][j] = this.preSum[i][j - 1] + this.matrix[i][j]
            } else if (j == 0) {
                this.preSum[i][j] = this.preSum[i - 1][j] + this.matrix[i][j]
            } else {
                this.preSum[i][j] = this.preSum[i - 1][j] + this.preSum[i][j - 1] + this.matrix[i][j] - this.preSum[i - 1][j - 1]
            }
        }
    }
    // 前缀和矩阵额外添加一行一列
    // 添加一列
    for (let i = 0; i < this.preSum.length; i++) {
        this.preSum[0].unshift(0)
    }
    // 添加一行
    this.preSum.unshift(new Array(this.preSum[0].length).fill(0))
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if (this.preSum) {
        return this.preSum[row2][col2] + this.preSum[row1 -1][col2 - 1] - this.preSum[row2][col1 - 1] - this.preSum[row1 - 1][col2]
    }
    return null
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */