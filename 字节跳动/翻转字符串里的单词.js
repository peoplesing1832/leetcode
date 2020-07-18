// 思路: 使用栈

/**
 * Stack
 */
var Stack = function() {
    this.stack = [];
};

Stack.prototype.push = function(x) {
    this.stack.push(x);
};

Stack.prototype.pop = function() {
    return this.stack.pop();
};

Stack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split('');
    const stack = new Stack();
    let result = '';
    let temp = '';

    for (let i = 0; i < arr.length; i++) {
        const s = arr[i];
        const top = stack.top();
        if (s === ' ') {
            if (
                top !== undefined &&
                top !== ' '
            ) {
                stack.push(s);
            }
        } else {
            stack.push(s);
        }
    }

    // 删除最后一个空格
    if (stack.top() === ' ') {
        stack.pop();
    }

    while (stack.top() !== undefined) {
        const s = stack.pop()
        if (s === ' ') {
            result = `${result}${temp}${s}`;
            temp = '';
        } else {
            temp = `${s}${temp}`;
        }
    }

    return `${result}${temp}`;
};