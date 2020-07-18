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

Stack.prototype.length = function() {
    return this.stack.length;
};

var simplifyPath = function(path) {
    const arr = path.split('/');
    const stack = new Stack();
    while (arr.length) {
        const s = arr.shift();
        if (s === '.') {
            continue;
        } else if (s === '..') {
            stack.pop();
        } else if (s !== '') {
            stack.push(s)
        }
    }
    const result = stack.stack.join('/')
    return `/${result}`
}

// 第一版
// /**
//  * Stack
//  */
// var Stack = function() {
//     this.stack = [];
// };

// Stack.prototype.push = function(x) {
//     this.stack.push(x);
// };

// Stack.prototype.pop = function() {
//     return this.stack.pop();
// };

// Stack.prototype.top = function() {
//     return this.stack[this.stack.length - 1];
// };

// Stack.prototype.length = function() {
//     return this.stack.length;
// };

// /**
//  * @param {string} path
//  * @return {string}
//  */
// var simplifyPath = function(path) {
//     const arr = path.split('');
//     const stack = new Stack();
//     // 当前目录 /./ /. 两种情况
//     const dotReg = /\/\.\/.+/;
//     const dotReg2 = /\/\.undefinedundefined/;
//     // 返回上一级目录 /../ /.. 两种情况
//     const dotdotReg = /\/\.\.\//;
//     const dotdotReg2 = /\/\.\.undefined/;

//     const back = (stack) => {
//         if (stack.length() === 1) {
//             return
//         } else {
//             let twoSlashes = 0;
//             while (!(twoSlashes == 2)) {
//                 let top = stack.top();
//                 if (top === '/') {
//                     twoSlashes += 1
//                 }
//                 if (twoSlashes !== 2) {
//                     stack.pop()
//                 }
//             }
//         }
//     };

//     while (arr.length) {
//         const s = arr.shift();
//         const top = stack.top();
//         switch (s) {
//             case '/':  
//                 if (top !== '/') {
//                     stack.push(s);
//                 } else {
//                     continue;
//                 }
//                 break
//             case '.':
//                 const temp = `${top}${s}${arr[0]}${arr[1]}`
//                 if (dotReg.test(temp) || dotReg2.test(temp)) {
//                     // 如果是当前目录
//                     continue;
//                 } else if (
//                     dotdotReg.test(temp) ||
//                     dotdotReg2.test(temp)
//                 ) {
//                     //如果是返回上一级
//                     arr.shift();
//                     back(stack);
//                 } else {
//                     stack.push(s)
//                 }
//                 break
//             default:
//                 stack.push(s)
//                 break
//         }
//     }

//     let result = stack.stack.join('');
//     if (result[result.length - 1] === '/' && result.length !== 1) {
//         result = result.slice(0, result.length - 1);
//     }

//     return result;
// };