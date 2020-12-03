// 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

// 示例:

// 输入: 3
// 输出:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n === 0) {
        return []
    }
    if (n === 1) {
        return [[1]]
    }
    
    const w = n;
    const h = n;
    const hash = {};
    const result = [];

    let direction = 'left';
    let x = 0;
    let y = 0;

    const isOutOfBounds = (x, y) => {
        if (
            x >= w || y >= h || x < 0 || y < 0 || hash[`${x}${y}`]
        ) {
            return true;
        }
        return false;
    }

    const left = (x, y) => {
        direction = 'left'
        const nextX = x + 1;
        const nextY = y;
        if (isOutOfBounds(nextX, nextY)) {
            return bottom(x, y)
        } else {
            return [nextX, nextY]
        }
    }

    const bottom = (x, y) => {
        direction = 'bottom'
        const nextX = x;
        const nextY = y + 1;
        if (isOutOfBounds(nextX, nextY)) {
            return right(x, y)
        } else {
            return [nextX, nextY]
        }
    }

    const right = (x, y) => {
        direction = 'right'
        const nextX = x - 1;
        const nextY = y;
        if (isOutOfBounds(nextX, nextY)) {
            return top(x, y)
        } else {
            return [nextX, nextY]
        }
    }

    const top = (x, y) => {
        direction = 'top'
        const nextX = x;
        const nextY = y - 1;
        if (isOutOfBounds(nextX, nextY)) {
            return left(x, y)
        } else {
            return [nextX, nextY]
        }
    }

    for (let i = 1; i <= n ** 2; i++) {
        const item = i;
        hash[`${x}${y}`] = true;
        if (!result[y]) {
            result[y] = []
        }
        result[y][x] = item;
        if (i < n ** 2 - 1) {
            let nextX, nextY
            switch (direction) {
                case 'left':
                    [nextX, nextY] = left(x, y);
                    break;
                case 'bottom':
                    [nextX, nextY] = bottom(x, y);
                    break;
                case 'right':
                    [nextX, nextY] = right(x, y);
                    break;
                case 'top':
                    [nextX, nextY] = top(x, y);
                    break
            }
            x = nextX;
            y = nextY;
        }
    }

    return result;
};

console.log(generateMatrix(3));
