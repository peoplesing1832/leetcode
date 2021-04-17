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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const result = []

    const traverside = (nodes) => {
        if (nodes.length) {
            const childs = []
            const vals = []
            for (let i = 0; i < nodes.length; i += 1) {
                const node = nodes[i]
                vals.push(node.val)
                if (node.left) {
                    childs.push(node.left)
                }
                if (node.right) {
                    childs.push(node.right)
                }
            }
            result.push(vals)
            traverside(childs)
        }
    }

    if (root) {
        traverside([root])
    }

    return result
};