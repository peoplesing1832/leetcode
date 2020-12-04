/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) { 
    let index = -1;

    const binarySearch = (arr, target, baseLength) => {
        if (arr.length) {
            const len = arr.length;
            if (len === 1 && arr[0] === target) {
                index = baseLength + 0
            } else if (len > 1) {
                const centerIndex = Math.floor(len / 2);
                const center = arr[centerIndex];
                const left = arr.slice(0, len - centerIndex);
                const right = arr.slice(centerIndex + 1);
                if (target === center) {
                    index = centerIndex + baseLength;
                } else if (target < center) {
                    binarySearch(left, target, 0);
                } else if (target > center) {
                    binarySearch(right, target, left.length);
                } 
            }
        }
    }

    // nums是已经排过序的
    binarySearch([...nums], target, 0);

};
