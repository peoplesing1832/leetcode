/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
    const total = R * C
    const result = []
    let current = 0
    let turnsNumber = 1; // 每间隔2次转弯的时候，边长需要加1（但是前3次都是2）
    let direction = 'bottom' // left -> bottom -> right -> top -> left 方向变化的顺序
    let sideLength = 2;
    let x = c0;
    let y = r0;

    // 判断坐标是否合法
    const isLegal = () => {
        if (x < 0 || y < 0 || x >= C || y >= R) {
            return false;
        } else {
            current += 1;
            return true;
        }
    }

    if (isLegal()) {
        result.push([y, x])
        x = x + 1;
        y = y;
    }

    const calculateSideLength = () => {
        if (turnsNumber <= 3) {
            sideLength = 2
        } else {
            sideLength = 2 + Math.ceil((turnsNumber - 3) / 2)
        }
    }

    const left = () => {
        let num = 1;
        while (num < sideLength) {
            if (isLegal()) {
                result.push([y, x]);
            }
            num += 1;
            if (num < sideLength) {
                x = x + 1;
                y = y;
            }
        }
        direction = 'bottom'
        x = x;
        y = y + 1;
    }

    const bottom = () => {
        let num = 1;
        while (num < sideLength) {
            if (isLegal()) {
                result.push([y, x]);
            }
            num += 1;
            if (num < sideLength) {
                x = x;
                y = y + 1;
            }
        }
        direction = 'right'
        x = x - 1;
        y = y; 
    } 

    const right = () => {
        let num = 1;
        while (num < sideLength) {
            if (isLegal()) {
                result.push([y, x]);
            }
            num += 1;
            if (num < sideLength) {
                x = x - 1;
                y = y; 
            }
        }
        direction = 'top'
        x = x + 1;
        y = y;
    }

    const top = () => {
        x = x;
        y = y - 1;
        let num = 1;
        while (num < sideLength) {
            if (isLegal()) {
                result.push([y, x]);
            }
            num += 1;
            if (num < sideLength) {
                x = x;
                y = y - 1;
            }
        }
        direction = 'left'
        x = x + 1;
        y = y;
    }

    while (current < total) {
        turnsNumber += 1
        calculateSideLength();
        switch (direction) {
            case 'left':
                left();
                break;
            case 'bottom':
                bottom();
                break;
            case 'right':
                right();
                break;
            case 'top':
                top();
                break;                
        }
        console.log(result)
    }


    return result
};

console.log(
    spiralMatrixIII(5, 6, 1, 4)
)


// a a a a a a a 7 8 8 8 8 8 a a 
// a a a a a a a 7 3 4 4 4 9 a a
// a a a a a a a 7 3 0 1 5 9 a a
// a a a a a a a 7 2 2 1 5 9 a a
// a a a a a a a 6 6 6 6 5 9 a a
// a a a a a a e e e e e e 9 a a
