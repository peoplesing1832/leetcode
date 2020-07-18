// 模拟乘法即可

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    /**
     * 补0
     */
    const zeroFill = (s, n) => {
        let zero = '';
        while (n > 0) {
            n -= 1;
            zero += '0';
        }
        return `${zero}${s}`;
    }

    /**
     * 加法
     */
    const addition = (s1, s2) => {
        if (s1.length > s2.length) {
            s2 = zeroFill(s2, s1.length - s2.length);
        } else if (s1.length < s2.length) {
            s1 = zeroFill(s1, s2.length - s1.length);
        }
        const len = s1.length;
        let carry = 0;
        let result = '';
        for (let i = len - 1; i >= 0; i--) {
            const n1 = Number(s1[i]);
            const n2 = Number(s2[i]);
            const sum = n1 + n2 + carry;
            let curret = '';
            if (sum >= 10) {
                carry = Math.floor(sum / 10);
                curret = `${sum % 10}`;
            } else {
                curret = `${sum}`;
                carry = 0;
            }
            result = `${curret}${result}`;
        }
        if (carry !== 0) {
            result = `${carry}${result}`; 
        }
        return result;
    }

    /**
     * 单位乘法
     * 只支持 '2' * '666' , '6' * '888'
     * s1, 是单位数
     * s2, 是多位数
     */
    const multiplication = (s1, s2) => {
        if (s1.length > 1) {
            throw new Error('参数不符合要求');
        }
        const len = s2.length;
        const n1 = Number(s1);
        let carry = 0;
        let result = '';
        for (let i = len - 1; i >= 0; i--) {
            const n2 = Number(s2[i]);
            const product = n1 * n2 + carry;
            let curret = '';
            if (product >= 10) {
                carry = Math.floor(product / 10);
                curret = `${product % 10}`;
            } else {
                curret = `${product}`;
                carry = 0
            }
            result = `${curret}${result}`;
        }
        if (carry !== 0) {
            result = `${carry}${result}`; 
        }
        return result;
    }
    
    if (num1.length > num2.length) {
        num2 = zeroFill(num2, num1.length - num2.length);
    } else if (num1.length < num2.length) {
        num1 = zeroFill(num1, num2.length - num1.length);
    }

    const len = num1.length;
    let arr = [];
    let result = '0';
    let zero = ''

    for (let i = len - 1; i >= 0; i--) {
        const n1 = Number(num1[i]);
        const n2 = num2;
        const n = multiplication(n1, n2);
        arr.push(`${n}${zero}`);
        zero += '0'
    }

    for (let i = 0; i < arr.length; i++) {
        result = addition(result, arr[i])
    }

    // 去除多余的0
    while (result[0] === '0' && result.length > 0) {
        result = result.slice(1);
    }

    if (result === '') {
        return '0'
    }

    return result;
};
