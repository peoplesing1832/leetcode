class Stack {
    constructor () {
        this.stack = []
    }

    push (val) {
        this.stack.push(val)
    }

    pop () {
        this.stack.pop()
    }

    top () {
        return this.stack[this.stack.length - 1];
    }

    length () {
        return this.stack.length;
    }
}


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = s.split('');
    const stack = new Stack();
    for (let i = 0; i < arr.length; i++) {
        if (stack.length() === 0) {
            stack.push(arr[i]);
        } else {
            const top = stack.top();
            if (top === '(' && arr[i] === ')') {
                stack.pop();
            } else if (top === '[' && arr[i] === ']') {
                stack.pop();
            } else if (top === '{' && arr[i] === '}') {
                stack.pop();
            } else {
                stack.push(arr[i])
            }
        }
    }

    return stack.length() === 0 ? true : false;
};
