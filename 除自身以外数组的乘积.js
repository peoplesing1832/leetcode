
// 乘积 = 当前数左边的乘积 * 当前数右边的乘积
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftProduct = [];
    let rightProduct = [];
    const result = [];
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        product = product * nums[i];
        leftProduct.push(product);
    }
    product = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        product = product * nums[i];
        rightProduct.push(product);
    }
    rightProduct = rightProduct.reverse();

    for (let i = 0; i < nums.length; i++) {
        if (leftProduct[i - 1] === undefined) {
            result.push(rightProduct[i + 1]);
        } else if (rightProduct[i + 1] === undefined) {
            result.push(leftProduct[i - 1]);
        } else {
            const left = leftProduct[i - 1];
            const right = rightProduct[i + 1];
            result.push(left * right);
        }
    }
    return result;
};
