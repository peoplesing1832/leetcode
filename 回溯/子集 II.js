// 🚨 使用hash去重
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = []
    const hash = {}

    result.push([])

    nums.sort((a, b) => a - b)

    const fn = (head, tail) => {
        for (let i = 0; i < tail.length; i++) {
            let key = [...head, tail[i]].join(',')
            if (!hash[key]) {
                result.push([...head, tail[i]])
                hash[key] = true;
            }
            if (tail.slice(i + 1)) {
                fn([...head, tail[i]], tail.slice(i + 1))
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let key = [nums[i]].join(',')
        if (!hash[key]) {
            result.push([nums[i]])
            hash[key] = true;
        }
        if (nums.slice(i + 1).length) {
            fn([nums[i]], nums.slice(i + 1))
        }
    }


    return result;
};

// 🚨 同层剪枝
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = []

    result.push([])

    nums.sort((a, b) => a - b)

    const fn = (head, tail) => {
        for (let i = 0; i < tail.length; i++) {
            if (tail[i] === tail[i - 1]) {
                continue
            } else {
                result.push([...head, tail[i]])
                if (tail.slice(i + 1)) {
                    fn([...head, tail[i]], tail.slice(i + 1))
                }
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        } else {
            result.push([nums[i]])
            if (nums.slice(i + 1).length) {
                fn([nums[i]], nums.slice(i + 1))
            }
        }  
    }

    return result;
};
