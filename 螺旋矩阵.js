// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

// 示例 1:

// 输入:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// 输出: [1,2,3,6,9,8,7,4,5]
// 示例 2:

// 输入:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const w = matrix[0].length;
    const h = matrix.length;
    const length = w * h;
    const result = [];

    let turns = 0;
    let x = 0;
    let y = 0;
    for (let i = 0; i < length; i++) {
        
    }
};
