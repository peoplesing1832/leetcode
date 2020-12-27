/**
 * @param {number} n
 * @return {string[]}
 // 可以优化下
 */
var generateParenthesis = function(n) {
    // 剪枝的条件：如果 ( 和 ) 相互抵消，堆栈为空，) 作为开头，必然是无效的 
    // 此时就没有进行递归下去的必要
    const result = [];
    const leftCollection = [];
    const rightCollection = [];

    for (let i = 0; i < n; i++) {
        leftCollection.push('(')
        rightCollection.push(')')
    }

    const fn = (head, num, left, right) => {
        if (num > 0) {
            if (left.length) {
                let temp = [...left];
                temp.splice(0, 1);
                fn(
                    {
                        content: `${head.content}(`,
                        valid: [...head.valid, '('],
                    },
                    num - 1,
                    temp,
                    right
                );
            }
            if (right.length) {
                let temp = [...right];
                temp.splice(0, 1);
                let valid = [...head.valid];
                let top = valid.pop();
                if (top === '(') {
                    head.valid.pop();
                    fn(
                        {
                            content: `${head.content})`,
                            valid: [...head.valid],
                        },
                        num - 1,
                        left,
                        temp
                    );
                }
            }
        } else {
            result.push(head.content)
        }
    };

    leftCollection.splice(0, 1);
    // 有效的组合第一个字符必须是 (
    fn(
        {
            content: '(',
            valid: ['('],
        },
        2 * n - 1,
        leftCollection,
        rightCollection
    );

    return result;
};

// 同层减枝
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []
    const left = []
    const rigth = []

    const fn = (head, leftNum, rightNum) => {
        if (leftNum === n && rightNum === n) {
            result.push(head)
        } else {
            if (leftNum >= rightNum) {
                if (leftNum < n) {
                    fn(`${head}(`, leftNum + 1, rightNum)
                }
                if (rightNum < n && rightNum + 1 <= leftNum) {
                    fn(`${head})`, leftNum, rightNum + 1)
                }
            }
        }
    }

    fn('', 0, 0);

    return result;
};
