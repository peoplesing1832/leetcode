/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    const sMap = new Map()
    const tMap = new Map()
    let len = s.length
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], t[i])
        tMap.set(t[i], s[i])
    }

    while (len) {
        if (
            sMap.get(s[len - 1]) !== t[len - 1] ||
            tMap.get(t[len - 1]) !== s[len - 1]
        ) {
            return false
        }
        len -= 1
    }

    return true
};
