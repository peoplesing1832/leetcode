/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []

    const fn = (head, tail) => {
        for (let i = 0; i < tail.length; i++) {
            let temp = [...tail]
            temp.splice(i, 1)
            if (temp.length) {
                fn([...head, tail[i]], temp);
            } else {
                result.push([...head, tail[i]])
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
