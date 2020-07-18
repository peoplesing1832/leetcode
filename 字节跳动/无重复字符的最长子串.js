// 双指针 + hash去重
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let len = 0;
    let max = 0;
    let start = 0;
    let end = 0;
    const hash = {};
    const total = s.length
    
    while (end < total) {
        
        if (hash[s[end]] !== undefined) {
            let temp = start;
            // 遇到重复后，start跳到之前存在的前一个
            start = hash[s[end]] + 1;
            while (temp < start) {
                delete hash[s[temp]];
                temp += 1;
                len -= 1;
            }
        }
        
        if (hash[s[end]] === undefined) {
            hash[s[end]] = end;
            len += 1;
            end += 1;
            if (len > max) {
                max = len;
            }
        }
    }
    
    return max
};