/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        const middIndex = Math.floor(((start + end) / 2));
        const midd = nums[middIndex]
        const leftArr = nums.slice(start, middIndex)
        const rightArr = nums.slice(middIndex + 1)
        const left = leftArr[leftArr.length - 1]
        const right = rightArr[0]
        // 是否为偶数
        const isEven = leftArr.length % 2 === 0 && rightArr.length % 2 === 0
        if (midd !== left && midd !== right) {
            return midd
        } else if (midd === left && midd !== right) {
            if (isEven) {
                end = middIndex - 2
            } else {
                start = middIndex + 1
            }
        } else if (midd === right && midd !== left) {
            if (isEven) {
                start = middIndex + 2
            } else {
                end = middIndex - 1
            }
        }
    }
};

// nums 数组始终为奇数

// 如果切割后两边是奇数，唯一出现的数字，在切割后不等于中间的那一边
// 1 1 3 |3| 4 4 5 
// 1 1 2 |3| 3 4 4

// 如果切割后两边是偶数，唯一出现的数字，在切割后等于中间的那一边
// 1 1 2 3 |3| 4 4 5 5
// 1 1 2 2 |3| 3 4 4 5