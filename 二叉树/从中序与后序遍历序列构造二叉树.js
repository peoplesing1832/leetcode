/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
    const root = {
        val: null,
        left: null,
        right: null,
    }

    const construct = (inorder, postorder, node) => {
        if (postorder.length) {
            const left = {
                val: null,
                left: null,
                right: null,
            }

            const right = {
                val: null,
                left: null,
                right: null,
            }

            const root = postorder[postorder.length - 1]
            const rootIndex = inorder.findIndex((val) => val === root)
            const inorderLeftTree = inorder.slice(0, rootIndex)
            const inorderRightTree = inorder.slice(rootIndex + 1)
            const inorderLeftTreeLen = inorderLeftTree.length
            const inorderRightTreeLen = inorderRightTree.length
            const postorderLeftTree = postorder.slice(0, inorderLeftTreeLen)
            const postorderRightTree = postorder.slice(inorderLeftTreeLen, postorder.length - 1)

            node.val = root
            node.left = inorderLeftTreeLen ? left : null
            node.right = inorderRightTreeLen ? right : null

            construct(inorderLeftTree, postorderLeftTree, left)
            construct(inorderRightTree, postorderRightTree, right)
        }
    }

    construct(inorder, postorder, root)

    return root;
};