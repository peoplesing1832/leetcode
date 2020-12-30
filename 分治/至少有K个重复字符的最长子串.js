/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    if (s.length < k) {
        return 0
    }

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
        const values = hash.values()   
        for (let value of values) {
            if (value.length < k) {
                splitDots = [...splitDots, ...value]
            }
        }
        splitDots.sort((a, b) => a - b)
        return splitDots
    }

    const divideAndConquer = (str) => {
        // 切割的点
        let splitDots = getSplitDots(str)
    }

    return divideAndConquer(s)
};
