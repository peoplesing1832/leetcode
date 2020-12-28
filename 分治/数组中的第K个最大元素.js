/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let result = null

    const divideAndConquer = (arr, base) => {

        if (arr.length === 1) {
            result = arr[0]
            return
        }

        const referenceValue = arr[0]
        const min = []
        const max = []
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > referenceValue) {
                max.push(arr[i])
            } else {
                min.push(arr[i])
            }
        }
        max.push(referenceValue)
        const maxLen = max.length + base;

        if (maxLen >= k && max.length) {
            // 说明k存在在max数组中
            divideAndConquer(max, base)
        } else if (maxLen < k && min.length) {
            // 说明k存在在min数组中
            divideAndConquer(min, maxLen)
        }
    }

    divideAndConquer(nums, 0)

    return result
};
