// https://tw.answers.yahoo.com/question/index?qid=20080714000015KK08695&guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAGqD7yNzrIdTl3v3DUWrXPRHE3m_p34DcztGVlJpGsgTmKjZpuJp9aOfv-aAyTpgbJmOltLBT8KbqhHNIUgKnTqXutMjJhW8f4gu6vagfsdulrWJz8SRRGHH48ntHt19jycKdKzBUc13g3sTiw4hWTwH2TusAj8qqf-qMQZKbuS1
// 简体中文知识圈真的恶臭，没一个靠谱的解释
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    return num**0.5 % 1 == 0
};


// 二分
var mySqrt = function(x) {
    let result = null

    const binarySearch = (start, end) => {
        if (start <= end) {
            const m = Math.floor(((start + end) / 2))
            if (m ** 2 === x) {
                result = m
            } else if (m ** 2 > x) {
                binarySearch(start, m - 1)
            } else {
                result = result === null ? m : Math.abs(x - (m**2)) < Math.abs(x - (result**2)) ? m : result
                binarySearch(m + 1, end)
            }
        }
    }

    binarySearch(0, x)

    return result
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    const result = mySqrt(num)
    return result ** 2 === num
};
