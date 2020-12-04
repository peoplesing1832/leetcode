/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    // 左边界
    let leftIndex = -1;
    // // 右边界
    let rightIndex = nums.length;

    // 寻找左边界
    const binarySearchLeft = (arr, target, baseLength) => {
        if (arr.length) {
            const len = arr.length;
            if (len === 1 && arr[0] === target) {
                leftIndex = baseLength
            } else if (len > 1) {
                const centerIndex = Math.floor(len / 2);
                const center = arr[centerIndex];
                const left = arr.slice(0, centerIndex);
                const right = arr.slice(centerIndex + 1);
                if (target === center) {
                    leftIndex = centerIndex + baseLength;
                    // 不一定是最左边的值，所以需要继续查找
                    binarySearchLeft(left, target, baseLength);
                } else if (target < center) {
                    binarySearchLeft(left, target, baseLength);
                } else if (target > center) {
                    binarySearchLeft(right, target, baseLength + left.length + 1);
                } 
            }
        }
    }

    // 寻找右边界(寻找第一个大于target的节点)

    const binarySearchRight = (arr, target, baseLength) => {
        if (arr.length) {
            const len = arr.length;
            if (len === 1 && arr[0] > target) {
                rightIndex = baseLength
            } else if (len > 1) {
                const centerIndex = Math.floor(len / 2);
                const center = arr[centerIndex];
                const left = arr.slice(0, centerIndex);
                const right = arr.slice(centerIndex + 1);
                if (center > target) {
                    rightIndex = centerIndex + baseLength;
                    // 继续查找, 因为可能不是最接近的,需要找到最接近的比target大的
                    binarySearchRight(left, target, baseLength);
                } else {
                    binarySearchRight(right, target, baseLength + left.length + 1);
                }
            }
        }
    }

    binarySearchLeft(nums, target, 0);
    binarySearchRight(nums, target, 0);

    if (leftIndex === -1) {
        return [-1, -1];
    }
    return [leftIndex, rightIndex-1]
};
