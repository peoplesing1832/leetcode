/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    // 行数: 0, 1, 2, 3, 4……n
    // 行数所需要的总硬币数: 
    //      0, 1, 3, 6, 10……[(n + 1) * n] / 2 (n是行数)

    if (n === 0) {
        return 0
    }

    if (n === 1 || n === 2) {
        return 1
    }

    const getNumberOfCoinsByLine = (line) => {
        return ((line + 1) * line) / 2;
    }
    
    let start = 1
    let end = n

    while (start <= end) {
        const midd = Math.floor((start + end) / 2)
        const coins = getNumberOfCoinsByLine(midd)
        if (coins === n) {
            return midd
        } else if (coins > n) {
            end = midd - 1
        } else if (coins < n) {
            start = midd + 1
        }
    }
    return end
};
