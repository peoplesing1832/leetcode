/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    const arr = digits.split('')
    const result = []

    const fn = (head, arr) => {
        if (arr.length) {
            const key = arr.splice(0, 1)[0]
            const collection = map[key]
            for (let i = 0; i < collection.length; i++) {
                fn(`${head}${collection[i]}`, [...arr])
            }
        } else {
            if (head) {
                result.push(head)
            }
        }
    }

    fn('', [...arr]);

    return result;
};
