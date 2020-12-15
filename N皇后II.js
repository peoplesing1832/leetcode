/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const result = []
    const rowAttackRange = {}
    const colAttackRange = {}
    const letDiagonalAttackRange = {}
    const rightDiagonalAttackRange = {}

    const initializeAttackRange = () => {
        // 初始化直线攻击范围
        for (let i = 0; i < n; i++) {
            rowAttackRange[i] = true
            colAttackRange[i] = true
        }
        // 初始化斜线攻击范围
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                letDiagonalAttackRange[i + j] = true
                rightDiagonalAttackRange[i - j] = true
            }
        }
    }

    initializeAttackRange()

    // 判读是否允许放置
    const isPlace = (x, y) => {
        if (rowAttackRange[y] && colAttackRange[x] && letDiagonalAttackRange[y + x] && rightDiagonalAttackRange[y - x]) {
            return true
        }
        return false
    }

    const fn = (row, collection) => {
        if (row === n) {
            result.push([...collection])
            return
        } else {
            for (let j = 0; j < n; j++) {
                if (isPlace(j, row)) {
                    rowAttackRange[row] = false
                    colAttackRange[j] = false
                    letDiagonalAttackRange[row + j] = false
                    rightDiagonalAttackRange[row - j] = false
                    collection.push({
                        x: j,
                        y: row,
                    })
                    fn(row + 1, collection)
                    // 如果从这个格子往下没有获得解，需要还原
                    rowAttackRange[row] = true
                    colAttackRange[j] = true
                    letDiagonalAttackRange[row + j] = true
                    rightDiagonalAttackRange[row - j] = true
                    collection.pop()
                }
            }
        }
    }

    for (let j = 0; j < n; j++) {
        let temp = [
            {
                x: j,
                y: 0
            }
        ];
        rowAttackRange[0] = false
        colAttackRange[j] = false
        letDiagonalAttackRange[0 + j] = false
        rightDiagonalAttackRange[0 - j] = false
        fn(
            1,
            temp
        )
        rowAttackRange[0] = true
        colAttackRange[j] = true
        letDiagonalAttackRange[0 + j] = true
        rightDiagonalAttackRange[0 - j] = true
    }

    return result.length

};
