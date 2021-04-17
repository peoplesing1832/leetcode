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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = []

    const traverside = (node) => {
        if (node) {
            traverside(node.left)
            traverside(node.right)
            result.push(node.val)
        }
    };

    traverside(root)

    return result;
};