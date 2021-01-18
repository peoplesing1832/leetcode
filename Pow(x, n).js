
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    const pow = (x, n) => {
        if (n === 0) {
            return 1
        }
        if (n === 1) {
            return x
        }
        const num = pow(x, Math.floor(n / 2))
        if (n & 1) {
            // 如果是奇数
            return num * num * x
        } else {
            // 如果是偶数
            return num * num
        }
    }

    const result = pow(x, Math.abs(n));

    return n > 0 ? result : (1 / result)
};
