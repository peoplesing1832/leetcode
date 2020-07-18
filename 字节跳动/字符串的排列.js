// 思路: 使用双指针，滑动窗口，使用hash判断是否相等（题解中，提示可以对字符串进行排序比较）

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const hash = {};
    const arr = s1.split('');
    let start = 0;
    let end = s1.length - 1;
    let isInclude = false;
    const total = s2.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]] === undefined) {
            hash[arr[i]] = 1;
        } else {
            hash[arr[i]] += 1;
        }
    }

    const isEqual = (s) => {
        const tempHash = {...hash};
        for (let i = 0; i < arr.length; i++) {
            if (tempHash[s[i]] === undefined) {
                break
            } else {
                tempHash[s[i]] -= 1;
                if (tempHash[s[i]] === 0) {
                    delete tempHash[s[i]]
                }
            }
        }
        return Object.keys(tempHash).length === 0
    };
    
    while (end <= total) {
        const tempStr = s2.slice(start, end + 1);
        if (isEqual(tempStr)) {
            isInclude = true;
            break;
        } else {
            start += 1
            end += 1
        }
    }
    
    return isInclude;
};