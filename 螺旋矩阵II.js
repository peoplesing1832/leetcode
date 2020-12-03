
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

    for (let i = 0; i < n; i++) {
        result.push([])
    }

    const isOutOfBounds = (x, y) => {
        if (
            x >= w || y >= h || x < 0 || y < 0 || hash[`${x},${y}`]
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
            direction = 'bottom'
            return [x, y + 1]
        } else {
            return [nextX, nextY]
        }
    }

    const bottom = (x, y) => {
        direction = 'bottom'
        const nextX = x;
        const nextY = y + 1;
        if (isOutOfBounds(nextX, nextY)) {
            direction = 'right'
            return [x - 1, y]
        } else {
            return [nextX, nextY]
        }
    }

    const right = (x, y) => {
        direction = 'right'
        const nextX = x - 1;
        const nextY = y;
        if (isOutOfBounds(nextX, nextY)) {
            direction = 'top'
            return [x, y - 1]
        } else {
            return [nextX, nextY]
        }
    }

    const top = (x, y) => {
        direction = 'top'
        const nextX = x;
        const nextY = y - 1;
        if (isOutOfBounds(nextX, nextY)) {
            
            direction = 'left'
            return [x + 1, y]
        } else {
            return [nextX, nextY]
        }
    }

    for (let i = 1; i <= n ** 2; i++) {
        const item = i;
        hash[`${x},${y}`] = true;
        result[y][x] = item;
        if (i < n ** 2) {
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
