/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    if (s.length < k) {
        return 0
    }

    let result = Number.MIN_SAFE_INTEGER;

    const getSplitDots = (str) => {
        let splitDots = []
        const hash = new Map()
        for (let i = 0; i < str.length; i++) {
            const key = str[i]
            if (!hash.has(key)) {
                hash.set(key, [i])
            } else {
                const val = hash.get(key)
                hash.set(key, [...val, i])
            }
        }
        const entries = hash.entries()   
        for (let [key, value] of entries) {
            if (value.length < k) {
                splitDots = [...splitDots, key]
            }
        }
        return splitDots
    }

    const divideAndConquer = (str) => {
        // 切割的点
        let splitDots = getSplitDots(str)
        if (splitDots.length === 0) {
            result = Math.max(result, str.length);
        } else {
            const arr = str.split(splitDots[0])
            for (let i = 0; i < arr.length; i++) {
                divideAndConquer(arr[i])
            }
        }
    }

    divideAndConquer(s)

    return result;
};
