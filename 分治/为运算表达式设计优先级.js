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
    const getPermutations = (a, b) => {
        const hash = {}
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                
            }
        }
    }

    const divideAndConquer = (str, res) => {

        for (let i = 0; i < str.length; i++) {
            const operator = str[i]
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


            // if (operatorHash[operator]) {
            //     // 把字符串切割两半
            //     left = 
            //     right = 
            //     divideAndConquer(left, leftRes)
            //     divideAndConquer(left, leftRes)
            // }
        }
    }

    divideAndConquer(input, [])

    return result;
};