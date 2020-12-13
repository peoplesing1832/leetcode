// 🚨 使用hash去重
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = []
    const hash = {}

    nums.sort((a, b) => a - b)

    const fn = (head, tail) => {
        for (let i = 0; i < tail.length; i++) {
            let temp = [...tail]
            temp.splice(i, 1)
            if (temp.length) {
                fn([...head, tail[i]], temp);
            } else {
                let key = [...head, tail[i]].join(',');
                if (!hash[key]) {
                    result.push([...head, tail[i]])
                    hash[key] = true
                }
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let temp = [...nums]
        temp.splice(i, 1)
        if (temp.length) {
            fn([nums[i]], temp);
        } else {
            result.push([nums[i]])
        }
    }

    return result;
};

// 🚨 同层剪枝
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = []

    nums.sort((a, b) => a - b)

    const fn = (head, tail) => {
        for (let i = 0; i < tail.length; i++) {
            let temp = [...tail]
            temp.splice(i, 1)
            if (tail[i] !== tail[i - 1]) {
                if (temp.length) {
                    fn([...head, tail[i]], temp);
                } else {
                    result.push([...head, tail[i]])
                }
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let temp = [...nums]
        temp.splice(i, 1)
        if (nums[i] !== nums[i - 1]) {
            if (temp.length) {
                fn([nums[i]], temp);
            } else {
                result.push([nums[i]])
            }
        }
        
    }

    return result;
};
