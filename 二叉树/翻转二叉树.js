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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    const traverside = (node) => {
        if (node) {
            const left = node.left
            const right = node.right
            traverside(left)
            traverside(right)
            node.left = right
            node.right = left
        }
    }

    traverside(root, root)

    return root
};