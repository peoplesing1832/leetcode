/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
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
                if (isNaN(Number(left))) {
                    divideAndConquer(left, leftRes)
                } else {
                    leftRes.push(left)
                }
                if (isNaN(Number(right))) {
                    divideAndConquer(right, rightRes)
                } else {
                    rightRes.push(right)
                }
                res.push(...getPermutations(leftRes, rightRes, operator))
            }
        }
    }

    divideAndConquer(input, result)

    // 如果是纯数字的情况
    if (result.length === 0) {
        return [Number(input)]
    }

    return result.map(item => eval(item));
};
