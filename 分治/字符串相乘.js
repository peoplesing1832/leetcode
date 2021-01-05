var addition = function(num1, num2) {
    // 暂时的, 之后需要修改为字符串加法
    return Number(num1) + Number(num2)
}

var padZero = function (num) {
    let zero = ''
    while (num) {
        zero += '0'
        num -= 1
    }
    return zero
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // 5678 * 1234
    // (56 * 10^2 + 78) * (12 * 10^2 + 34)
    // (56 * 12 * 10^2 * 10^2) + (56 * 34 * 10^2) + (78 * 12 * 10^2) + (78 * 34) 
    // (56 * 12 * 10^4) + (56 * 34 * 10^2) + (78 * 12 * 10^2) + (78 * 34) 
    // (56 * 12 * 10^4) + (((56 * 34) + (78 * 12)) * 10^2) + (78 * 34) 
    const divideAndConquer = (str1, str2) => {
        let str1High, str1Low, str2High, str2Low, str1Carry, str2Carry

        if (str1.length > 1) {
            const str1MiddIndex = Math.floor(str1.length / 2)
            str1High = str1.slice(0, str1MiddIndex)
            str1Low = str2.slice(str1MiddIndex)
            str1Carry = str1Low.length
        } else {
            str1High = str1
            str1Low = '0'
        }

        if (str2.length > 1) {
            const str2MiddIndex = Math.floor(str2.length / 2)
            str2High = str2.slice(0, str2MiddIndex)
            str2Low = str2.slice(str2MiddIndex)
            str2Carry = str2Low.length
        } else {
            str2High = str2
            str2Low = '0'
        }
    }

    return divideAndConquer(num1, num2)
};
