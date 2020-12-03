/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const w = matrix[0].length;
    const h = matrix.length;
    const total = w * h;
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

    for (let i = 0; i < total; i++) {
        let item = matrix[y][x];
        hash[`${x}${y}`] = true;
        result.push(item);
        // 避免无限递归
        if (i < total - 1) {
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
