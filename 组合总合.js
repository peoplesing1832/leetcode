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
