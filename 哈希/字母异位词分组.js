/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {}
    const result = []
    const letterHash = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    }

    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort((a,b) => letterHash[a] - letterHash[b]).join('')
        if (!hash[key]) {
            hash[key] = [strs[i]]
        } else {
            hash[key].push(strs[i])
        }
    }

    for (let key in hash) {
        result.push(hash[key])
    }

    return result;
};
