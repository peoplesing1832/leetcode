/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const hash = {}

    const fn = (collection, target) => {
        for (let i = 0; i < candidates.length; i++) {
            let balance = target - candidates[i]
            if (balance > 0) {
                fn([...collection, candidates[i]], balance)
            } else if (balance === 0) {
                const item = [...collection, candidates[i]].sort((a,b) => a - b)
                const key = item.join(',')
                if (!hash[key]) {
                    result.push(item)
                    hash[key] = true
                }
            } else {
                // 结束, 不处理
            }
        }
    }

    fn([], target)

    return result;
};

// 不使用hash

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    candidates.sort((a, b) => a - b)

    const fn = (arr, sum, index) => {
        if (sum > target) {
            return
        }
        if (sum === target) {
            result.push(arr)
        } else {
            // i = index, 避免重复的递归，同时避免重复
            for (let i = index; i < candidates.length; i++) {
                fn([...arr, candidates[i]], sum + candidates[i], i)
            }
        }
    }

    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i] === target) {
            result.push([candidates[i]])
        } else {
            fn([candidates[i]], candidates[i], i)
        }
    }

    return result;
};
