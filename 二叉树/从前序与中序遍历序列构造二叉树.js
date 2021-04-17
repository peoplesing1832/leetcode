/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {

    const root = {
        val: null,
        left: null,
        right: null,
    }

    // 构建二叉树
    const construct = (preorder, inorder, node) => {
        if (preorder.length) {
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

            const root = preorder[0]
            const rootIndex = inorder.findIndex((val) => val === root)
            const inorderLeftTree = inorder.slice(0, rootIndex)
            const inorderRightTree = inorder.slice(rootIndex + 1)
            const inorderLeftTreeLen = inorderLeftTree.length
            const inorderRightTreeLen = inorderRightTree.length
            const preorderLeftTree = preorder.slice(1, inorderLeftTreeLen + 1)
            const preorderRightTree = preorder.slice(inorderLeftTreeLen + 1)
            
            node.val = preorder[0]
            node.left = inorderLeftTreeLen ? left : null
            node.right = inorderRightTreeLen ? right : null

            construct(preorderLeftTree, inorderLeftTree, left)
            construct(preorderRightTree, inorderRightTree, right)
        }
    }

    construct(preorder, inorder, root)

    return root;
};