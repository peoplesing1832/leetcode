/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 0) {
        return 0
    }

    if (n === 1) {
        return 1
    }

    if (n === 2) {
        return 2
    }

    const dp = []
    
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            dp.push(1)
        } else if (i === 1) {
            dp.push(2)
        } else {
            dp[i] = dp[i - 2] + dp[i - 1] 
        }
    }

    return dp[n - 1]
};