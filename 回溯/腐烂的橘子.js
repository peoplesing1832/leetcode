
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

    const w = grid[0].length
    const h = grid.length
    const rot = []
    let date = 0
    
    const getLeft = (x, y) => {
        if (x - 1 >= 0) return {x: x - 1, y,}
        return false;
    }
    const getRight = (x, y) => {
        if (x + 1 < w) return {x: x + 1, y,}
        return false;
    }
    const getTop = (x, y) => {
        if (y - 1 >= 0) return {x, y: y - 1}
        return false;
    }
    const getBottom = (x, y) => {
        if (y + 1 < h) return {x, y: y + 1,}
        return false;
    }
    const getNext = (root, key) => {
        const nexts = []
        const left = getLeft(root.x, root.y)
        const right = getRight(root.x, root.y)
        const top = getTop(root.x, root.y)
        const bottom = getBottom(root.x, root.y)
        if (left) {
            const {x, y} = left
            if (grid[y][x].val === 1 && !grid[y][x][key]) {
                grid[y][x][key] = true
                nexts.push(grid[y][x])
            }
        }
        if (right) {
            const {x, y} = right
            if (grid[y][x].val === 1 && !grid[y][x][key]) {
                grid[y][x][key] = true
                nexts.push(grid[y][x])
            }
        }
        if (top) {
            const {x, y} = top
            if (grid[y][x].val === 1 && !grid[y][x][key]) {
                grid[y][x][key] = true
                nexts.push(grid[y][x])
            }
        }
        if (bottom) {
            const {x, y} = bottom
            if (grid[y][x].val === 1 && !grid[y][x][key]) {
                grid[y][x][key] = true
                nexts.push(grid[y][x])
            }
        }
        return nexts
    }
    const bfs = (nexts, key, date) => {
        let temp = []
        for (let i = 0; i < nexts.length; i++) {
            const orange = nexts[i]
            if (date < orange.rot || !orange.rot) {
                orange.rot = date
            }
            const next = getNext(orange, key)
            temp = [...temp, ...next]
        }
        if (temp.length) {
            bfs(temp, key, date + 1)
        }
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const orange = {val: grid[i][j], rot: 0, x: j, y: i}
            grid[i][j] = orange
            if (orange.val === 2) {
                rot.push(grid[i][j])
            }
        }
    }

    for (let i = 0; i < rot.length; i++) {
        const key = `${rot[i].x},${rot[i].y}`
        const nexts = getNext(rot[i], key)
        bfs(nexts, key, 1)
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j].val === 1 && grid[i][j].rot === 0) {
                return -1
            } else {
                if (grid[i][j].rot > date) {
                    date = grid[i][j].rot
                }
            }
        }
    }

    

    return date
};
