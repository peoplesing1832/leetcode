// https://segmentfault.com/a/1190000017392936
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length) {
        return false
    }

    let result = true
    let index = -1

    const map = {}

    for (let i = 0; i < t.length; i++) {
        const key = t[i]
        if (!map[key]) {
            map[key] = [i]
        } else {
            map[key].push(i)
        }
    }

    const binarySearch = (start, end, arr) => {
        if (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            const midd = arr[middIndex]
            if (midd > index) {
                index = midd
                // 查找最小的
                binarySearch(start, middIndex - 1, arr)
            } else if (midd <= index) {
                binarySearch(middIndex + 1, end, arr)
            }
        }
    }

    for (let i = 0; i < s.length; i++) {
        const key = s[i]
        const arr = map[key]
        if (arr) {
            let prev = index
            binarySearch(0, arr.length - 1, arr)
            if (prev === index) {
                result = false
                break
            }
        } else {
            result = false
            break
        }
    }

    return result
};