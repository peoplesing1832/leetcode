/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {

    const result = [];
    const arrTree = [];

    // 层序遍历
    const traversing = (node, level) => {
        if (!node) {
            return
        }
        if (!arrTree[level]) {
            arrTree[level] = []
        }
        if (node.val !== null) {
            arrTree[level].push(node.val)
        }
        if (node.left) {
            traversing(node.left, level + 1)
        }
        if (node.right) {
            traversing(node.right, level + 1)
        }
    }
    
    traversing(root, 0)

    for (let i = 0; i < arrTree.length; i++) {
        result.push(arrTree[i][arrTree[i].length - 1]);
    }

    return result;
};