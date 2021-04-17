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
 * @return {number}
 */
 var maxDepth = function(root) {
    let max = 0

    const traverside = (node, depth) => {
        if (node) {
            max = Math.max(max, depth)
            traverside(node.left, depth + 1)
            traverside(node.right, depth + 1)
        }
    }

    traverside(root, 1)

    return max
};