/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
//（pre[i] - pre[j - 1]) % K === 0 
// pre[i] % K === pre[j - 1] % K
// 这道题目不是很理解，负数取模
var subarraysDivByK = function(A, K) {
    let count = 0
    let preSum = 0
    let hash = {0: 1}

    for (let i = 0; i < A.length; i++) {
        preSum += A[i]
        const key = (preSum % K + K) % K
        if (hash[key]) {
            count += hash[key]
        }
        if (!hash[key]) {
            hash[key] = 1
        } else {
            hash[key] += 1
        }
    }

    return count
};
