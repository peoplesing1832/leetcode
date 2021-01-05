var addition = function(num1, num2, num3, num4) {
    // 暂时的, 之后需要修改为字符串加法
    return Number(num1) + Number(num2) + Number(num3) + Number(num4)
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

    // (5 * 10^1 + 6) * (1 * 10^1 + 2)
    // (5 * 1 * 10^2) + (5 * 2 * 10^1) + (6 * 1 * 10^1) + (6 * 2)
    // 500 + 100 + 60 + 12 => 672 * 10^4
    const divideAndConquer = (str1, str2) => {
        let str1High, str1Low, str2High, str2Low, str1Carry, str2Carry, r1, r2, r3, r4

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

        if (str1High.length <= 1 && str2High.length <= 1) {
            r1 = String(Number(str1High) * Number(str2High)) + padZero(str1Carry + str2Carry)
        } else {
            r1 = divideAndConquer(str1High, str2High) + padZero(str1Carry + str2Carry)
        }

        if (str1High.length <= 1 && str2Low.length <= 1) {
            r2 = String(Number(str1High) * Number(str2Low)) + padZero(str1Carry)
        } else {
            r2 = divideAndConquer(str1High, str2Low) + padZero(str1Carry)
        }

        if (str1Low.length <= 1 && str2High.length <= 1) {
            r3 = String(Number(str1Low) * Number(str2High)) + padZero(str2Carry)
        } else {
            r3 = divideAndConquer(str1Low, str2High) + padZero(str2Carry)
        }

        if (str1Low.length <= 1 && str2Low.length <= 1) {
            r4 = String(Number(str1Low) * Number(str2Low)) + ''
        } else {
            r4 = divideAndConquer(str1Low, str2Low)
        }

        return addition(r1, r2, r3, r4)
    }

    return divideAndConquer(num1, num2)
};

console.log(multiply('5678', '1234'))
