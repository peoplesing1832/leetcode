/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = []
    candidates = candidates.sort((a, b) => a - b)

    const fn = (sum, arr, candidates) => {
        if (sum > target) {
            return
        }
        if (sum === target) {
            result.push(arr)
        } else {
            for (let i = 0; i < candidates.length; i++) {
                if (candidates[i] !== candidates[i - 1]) {
                    let temp = candidates.slice(i + 1)
                    fn(sum + candidates[i], [...arr, candidates[i]], temp)
                }
            }
        }
    }

    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i] === target && candidates[i] !== candidates[i - 1]) {
            result.push([candidates[i]])
        } else if (candidates[i] !== candidates[i - 1]) {
            let temp = candidates.slice(i + 1)
            fn(candidates[i],[candidates[i]],temp)
        }
    }

    return result;
};
