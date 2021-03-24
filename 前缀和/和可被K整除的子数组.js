/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
 var subarraysDivByK = function(A, K) {
    // 前缀和数组
    const pre = []
    let count = 0

    // 构建前缀和数组
    for (let i = 0; i < A.length; i++) {
        const a = A[i]
        const b = pre[i - 1] === undefined ? 0 : pre[i - 1]
        pre[i] = a + b
    }

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j <= i; j++) {
            // 计算区间和，查找到满足条件的区间和，count加一
            let intervalSum;
            if (j === 0) {
                intervalSum = pre[i]
            } else if (j === i) {
                intervalSum = A[i]
            } else {
                intervalSum = pre[i] - pre[j - 1]
            }
            if (intervalSum % K === 0) {
                count += 1
            }
        }
    }

    return count
};