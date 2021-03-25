/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// （pre[i] - pre[j - 1]) % K === 0 =>pre[i] % K === pre[j - 1] % K
var subarraysDivByK = function(A, K) {
    let count = 0
    let preSum = 0
    let hash = {0: 1}

    for (let i = 0; i < A.length; i++) {
        preSum += A[i]
        let key = preSum % K
        if (hash[key]) {
            count += hash[key]
        }
        if (key === 0) {
            count += 1
        }

        if (!hash[key]) {
            hash[key] = 1
        } else {
            hash[key] += 1
        }
    }

    return count
};

