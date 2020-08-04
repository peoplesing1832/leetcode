/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0 || prices.length === 1) return 0

    // 当天持有股票
    const dp1 = [];
    // 当天不持有股票
    const dp2 = [];

    for (let i = 0; i < prices.length; i++) {
        const a = dp1[i - 1] === undefined ? -Number.MAX_VALUE : dp1[i - 1];
        const b = -prices[i];
        dp1[i] = Math.max(a, b);
        const c = dp2[i - 1] === undefined ? -Number.MAX_VALUE : dp2[i - 1];
        const d = i === 0 ? 0 : prices[i] + dp1[i - 1];
        dp2[i] = Math.max(c, d);
    }

    return dp2[dp2.length - 1];
};
