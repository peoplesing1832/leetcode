/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    if (p === q) return p
    if (p === root.val || q === root.val) return root.val

    const map = new Map()
    const parents = new Set()
    let result = null

    // 遍历二叉树, 记录每一个节点的父节点
    const traverside = (node) => {
        if (node) {
            if (node.left) {
                map.set(node.left, node)
            }
            if (node.right) {
                map.set(node.right, node)
            }
            traverside(node.left)
            traverside(node.right)
        }
    }
    map.set(root, null)
    traverside(root)

    while (p !== null) {
        parents.add(p)
        p = map.get(p)
    }

    while (q !== null) {
        if (parents.has(q)) {
            result = q
            break
        }
        q = map.get(q)
    }

    return result
};