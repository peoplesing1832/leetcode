// 本题二分法不是最优解

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const result = new Set()

    const binarySearch = (start, end, target) => {
        if (start <= end) {
            const middIndex = Math.floor(((start + end) / 2))
            const midd = nums1[middIndex]
            if (target === midd) {
                result.add(midd)
            } else if (target > midd) {
                binarySearch(middIndex + 1, end, target)
            } else if (target < midd) {
                binarySearch(start, middIndex - 1, target)
            }
        }
    }

    nums1.sort((a, b) => a - b);

    for (let i = 0; i < nums2.length; i++) {
        binarySearch(0, nums1.length - 1, nums2[i])
    }

    return [...result]
};