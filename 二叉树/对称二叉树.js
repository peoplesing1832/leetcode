/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    let result = true

    const traverside = (left, right) => {
        if (left && right) {
            const leftVal = left.val
            const rightVal = right.val
            if (leftVal === rightVal) {
                traverside(left.left, right.right)
                traverside(left.right, right.left)
            } else {
                result = false
            }
        } else {
            if (left || right) {
                result = false 
            }
        }
    }

    traverside(root, root)

    return result
};