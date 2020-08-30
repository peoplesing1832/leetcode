/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let minStr = -1;
    
    for (let i = 0; i < strs.length; i++) {
        if (minStr === -1) {
            minStr = strs[i];
        } else if (strs[i].length < minStr.length) {
            minStr = strs[i];
        }
    }

    while (minStr.length) {
        let count = 0;
        for (let i = 0; i < strs.length; i++) {
            const start = 0;
            const end = minStr.length;
            const item = strs[i].slice(start, end);
            if (item === minStr) {
                count += 1;
                continue
            } else {
                isSucces = false
                minStr = minStr.slice(0, minStr.length - 1);
                break
            }
        }
        if (count === strs.length) {
            return minStr;
        }
    }

    return ''
};