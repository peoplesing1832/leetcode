/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0
    const width = grid[0].length
    const height = grid.length
    const lands = []

    if (height === 0) {
        return 0
    }

    const bfs = (lands, hash, area) => {
        let temp = []
        for (let i = 0; i < lands.length; i++) {
            const newLands = getNextLand(lands[i], hash)
            temp = [...temp, ...newLands]
            lands[i].value = 0
            area.area += 1
        }
        if (temp.length > 0) {
            bfs(temp, hash, area)
        }
    }

    const getNextLand = (land, hash) => {
        const { x, y } = land
        const lands = []
        // top
        if (y - 1 >= 0) {
            const land = grid[y - 1][x]
            if (!hash.has(land) && land.value === 1) {
                hash.set(land, true)
                lands.push(land)
            }
        }
        // right
        if (x - 1 >= 0) {
            const land = grid[y][x - 1]
            if (!hash.has(land) && land.value === 1) {
                hash.set(land, true)
                lands.push(land)
            }
        }
        // bottom
        if (y + 1 <= height - 1) {
            const land = grid[y + 1][x]
            if (!hash.has(land) && land.value === 1) {
                hash.set(land, true)
                lands.push(land)
            }
        }
        // left
        if (x + 1 <= width - 1) {
            const land = grid[y][x + 1]
            if (!hash.has(land) && land.value === 1) {
                hash.set(land, true)
                lands.push(land)
            }
        }
        return lands
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const land = {
                x: j,
                y: i,
                value: grid[i][j]
            }
            grid[i][j] = land
            if (land.value === 1) {
                lands.push(land)
            }
        }
    }

    for (let i = 0; i < lands.length; i++) {
        const land = lands[i]
        const area = {
            area: 0
        }
        if (lands.value === 0) {
            continue;
        } else {
            area.area = 1
            const hash = new Map()
            hash.set(land, true)
            const temp = getNextLand(land, hash)
            land.value = 0
            bfs(temp, hash, area)
        }
        if (area.area > maxArea) {
            maxArea = area.area;
        }
    }

    return maxArea;
};
