var zigzagLevelOrder = function(root) {
    if (!root) return []

    const result = []

    const traverside = (nodes, level) => {
        const len = nodes.length
        if (len) {
            const childs = []
            const vals = []
            for (let i = 0; i < len; i += 1) {
                const node = nodes[i]
                vals.push(node.val)
                if (node.left) {
                    childs.push(node.left)
                }
                if (node.right) {
                    childs.push(node.right)
                }
            }
            if ((level & 1) === 0) {
                // 偶数
                vals.reverse()
            }
            result.push(vals)
            traverside(childs, level + 1)
        }
    }

    traverside([root], 1)

    return result
};
