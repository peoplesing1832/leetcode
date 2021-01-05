// '5678' * '1234'
// (56 * (10 ** 2) + 78) * (12 * (10 ** 2) + 34)
// ((56 * 12) * (10 ** 4)) + ((78 * 12 + 56 * 34) * (10 ** 2)) + (78 * 34)
// ((5 * 10 + 6)) * (10 ** 4) + 


var addition = function(num1, num2) {
    // 暂时的
    return Number(num1) + Number(num2)
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

    const padZero = (num) => {
        let zero = ''
        while (num) {
            zero += '0'
            num -= 1
        }
        return zero
    }

    // 5678 * 1234
    // (56 * 12) 
    const divideAndConquer = (str1, str2, carry) => {
        let str1Val, str2Val
        if (str1.length > 1) {
            const str1MiddIndex = Math.floor(str1 / 2)
            const str1Height = str1.slice(0, str1MiddIndex)
            const str1Low = str2.slice(str1MiddIndex)
            const str1Carry = str1Low.length
            str1Val = divideAndConquer(str1Height, str1Low, str1Carry)
        } else {
        }

        if (str2.length > 1) {
            const str2MiddIndex = Math.floor(str2 / 2)
            const str2Height = str2.slice(0, str2MiddIndex)
            const str2Low = str2.slice(str2MiddIndex)
            const str2Carry = str2Low.length
            str2Val = divideAndConquer(str2Height, str2Low, str2Carry)
        } else {
        }
    }

    return divideAndConquer(num1, num2, 0)
};
