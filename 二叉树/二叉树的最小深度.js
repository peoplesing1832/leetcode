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
var minDepth = function(root) {
    let min = Number.MAX_VALUE

    const traverside = (nodes, depth) => {
        if (nodes.length) {
            const childs = []
            for (let i = 0; i < nodes.length; i += 1) {
                const node = nodes[i]
                if (node.left) {
                    childs.push(node.left)
                }
                if (node.right) {
                    childs.push(node.right)
                }
                if (!node.left && !node.right) {
                    // 没有子节点的节点
                    min = Math.min(depth, min)
                    // 终止遍历
                    return
                }
            }
            traverside(childs, depth + 1)
        }
    }

    if (root) {
        traverside([root], 1)
    } else {
        return 0
    }

    return min
};