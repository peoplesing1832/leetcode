class MathStack {
    constructor (num) {
        this.num = num
    }

    pop () {
        if (~~this.num > 0) {
            let pop = this.num % 10;
            this.num /= 10;
            this.num = ~~this.num;
            return pop;
        }
    }

    push (n) {
        this.num = ~~this.num * 10 + n;
        return this.num;
    }

    isEmpty () {
        return ~~this.num === 0
    }
}

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = Math.abs(x);
    const signBit = x > 0;
    const params = new MathStack(x);
    const result = new MathStack(0);
    while(!params.isEmpty()) {
        if (result.num > 214748364) {
            return 0
        }
        const a = params.pop();
        result.push(a)
    }
    return signBit ? result.num : -result.num;
};
