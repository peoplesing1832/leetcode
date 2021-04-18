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
 var isBalanced = function(root) {
    if (!root) return true

    let result = true

    // 获取节点高的
    const getDepth = (node) => {
        if (node) {
            return Math.max(getDepth(node.left), getDepth(node.right)) + 1
        } else {
            return 0
        }
    }

    const traverside = (node) => {
        if (node) {
            const leftNode = node.left
            const rightNode = node.right
            const leftDepth = getDepth(leftNode, 0)
            const rightDepth = getDepth(rightNode, 0)
            if (Math.abs(rightDepth - leftDepth) <= 1) {
                // 左右子节点继续向下查找
                traverside(leftNode)
                traverside(rightNode)
            } else {
                result = false
                return
            }
        }
    }

    traverside(root)

    return result
};