class MathStack {
    constructor (num) {
        this.num = num
    }

    pop () {
        if (Math.floor(this.num) > 0) {
            let pop = this.num % 10;
            this.num /= 10;
            this.num = Math.floor(this.num);
            return pop;
        }
    }

    push (n) {
        this.num = Math.floor(this.num) * 10 + n;
        return this.num;
    }

    isEmpty () {
        return Math.floor(this.num) === 0
    }
}

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const signBit = x > 0;
    x = Math.abs(x);
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
