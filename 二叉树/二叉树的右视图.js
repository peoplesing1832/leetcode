/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []

    const result = []

    const traverside = (nodes) => {
        const len = nodes.length
        if (len) {
            const childs = []
            for (let i = 0; i < len; i += 1) {
                const node = nodes[i]
                if (i === len - 1) {
                    result.push(node.val)
                }
                if (node.left) {
                    childs.push(node.left)
                }
                if (node.right) {
                    childs.push(node.right)
                }
            }
            traverside(childs)
        }
    }

    traverside([root])

    return result
};
