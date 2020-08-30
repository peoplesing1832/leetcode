/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 时间复杂度不满足 O(m + n)
var findMedianSortedArrays = function(nums1, nums2) {
    let reuslt = [];

    while (nums1.length > 0 && nums2.length > 0) {
        if (nums1[0] < nums2[0]) {
            reuslt.push(nums1.shift());
        } else if (nums1[0] > nums2[0]) {
            reuslt.push(nums2.shift());
        } else if (nums1[0] === nums2[0]) {
            reuslt.push(nums1.shift());
            reuslt.push(nums2.shift());
        }
    }

    if (nums1.length > 0) {
        reuslt = [...reuslt, ...nums1];
    }

    if (nums2.length > 0) {
        reuslt = [...reuslt, ...nums2];
    }

    if (reuslt.length & 1) {
        // 奇数
        return reuslt[Math.floor(reuslt.length / 2)]
    } else {
        // 偶数
        const a = reuslt[reuslt.length / 2]
        const b = reuslt[reuslt.length / 2 - 1]
        return (a + b) / 2
    }
}