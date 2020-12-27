/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];
    const candidates = [];
    const target = n;

    // 初始化
    for (let i = 1; i <= 9; i++) {
        candidates.push(i)
    }

    const fn = (sum, arr, candidates, k) => {
        if (k >= 0) {
            if (k === 0) {
                if (sum === target) {
                    result.push(arr)
                }
            } else {
                for (let i = 0; i < candidates.length; i++) {
                    const temp = candidates.slice(i + 1)
                    fn(
                        sum + candidates[i],
                        [...arr, candidates[i]],
                        [...temp],
                        k - 1
                    );
                }
            }
        }
    }

    for (let i = 0; i < candidates.length; i++) {
        if (k === 1 && candidates[i] === target) {
            result.push([candidates[i]])
        } else {
            const temp = candidates.slice(i + 1)
            fn(
                candidates[i],
                [candidates[i]],
                [...temp],
                k - 1
            )
        }
    }

    return result;
};
