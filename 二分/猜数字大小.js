/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */


/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let result = null;

    const binarySearch = (start, end) => {
        if (start <= end) {
            const m = Math.floor(((start + end) / 2))
            
            const t = guess(m)
            if (t === 0) {
                result = m
                return
            } else if (t === 1) {
                binarySearch(m + 1, end)
            } else {
                binarySearch(start, m - 1)
            }
        }
    }

    binarySearch(1, n)

    return result;
};