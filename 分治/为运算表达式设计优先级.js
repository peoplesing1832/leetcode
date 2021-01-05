/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    const hash = new Map()
    const result = []
    const operatorHash = {
        '+': true,
        '-': true,
        '*': true,
    }

    // 获取排列组合
    const getPermutations = (a, b, operator) => {
       
        const hash = {}
        const result = []
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                const key = `((${a[i]})${operator}(${b[j]}))`
                if (!hash[key]) {
                    result.push(key)
                }
            }
        }
        return result
    }

    const divideAndConquer = (str, res) => {
        for (let i = 0; i < str.length; i++) {
            const operator = str[i]
            if (operatorHash[operator]) {
                const left = str.slice(0, i)
                const right = str.slice(i + 1)
                const leftRes = []
                const rightRes = []
                if (left.length > 1) {
                    divideAndConquer(left, leftRes)
                } else {
                    leftRes.push(left)
                }
                if (right.length > 1) {
                    divideAndConquer(right, rightRes)
                } else {
                    rightRes.push(right)
                }
                res.concat(getPermutations(leftRes, rightRes, operator))
            }
        }
    }

    divideAndConquer(input, result)

    return result;
};

diffWaysToCompute("2-1-1")