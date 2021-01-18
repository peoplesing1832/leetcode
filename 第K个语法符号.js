// 第一行: 0
// 第二行: 01
// 第三行: 0110 // 3 - 1
// 第四行: 01101001 // 4 - 2 nm
// 第五行: 0110100110010110 // 5 - 4 nmmn
// 第六行: 0110 1001 1001 0110 1001 0110 0110 1001 // 6 - 8 nmmn mnnm
// 第七行: 0110 1001 1001 0110 1001 0110 0110 1001 1001 0110 0110 1001 0110 1001 1001 0110 // 7 - 16

/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 * 思路一: 会超时
 */
// var kthGrammar = function(N, K) {
//     if (N === 1) return 0

//     const negate = (s) => {
//         let _s = ''
//         for (let i = 0; i < s.length; i++) {
//             _s += s[i] === '0' ? '1' : '0'
//         }
//         return _s;
//     }

//     const grammar = (n, s) => {
//         if (n === 0) {
//             return s
//         }
//         let left;
//         if (s === '0') {
//             left = grammar(n - 1, '0')
//         } else {
//             left = grammar(n - 1, '1')
//         }
//         return left + negate(left)
//     }

//     let left = grammar(N - 2, '0')

//     const kth = left + negate(left)

//     return kth[K - 1]
// };


/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 * 思路二: 会超时
 */
// var kthGrammar = function(N, K) {
//     if (N === 1) return 0
//     N -= 2
//     let s = '01'

//     const negate = (s) => {
//         let _s = ''
//         for (let i = 0; i < s.length; i++) {
//             _s += s[i] === '0' ? '1' : '0'
//         }
//         return _s;
//     }

//     while (N) {
//         s = s + negate(s)
//         N -= 1
//     } 

//     return s[K - 1]
// }

// /**
//  * @param {number} N
//  * @param {number} K
//  * @return {number}
//  * 思路三: 找规律
//  */
var kthGrammar = function(N, K) {    
}
