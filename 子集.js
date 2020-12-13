/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []

    result.push([])

    const fn = (head, tail) => {
        // console.log(head, tail)
        for (let i = 0; i < tail.length; i++) {
            result.push([...head, tail[i]])
            if (tail.slice(i + 1)) {
                fn([...head, tail[i]], tail.slice(i + 1))
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        result.push([nums[i]])
        if (nums.slice(i + 1).length) {
            fn([nums[i]], nums.slice(i + 1))
        }
    }


    return result;
};
