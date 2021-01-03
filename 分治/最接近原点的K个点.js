/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {

    let reuslt = []
    
    // 欧几里得距离
    const getEuclideanDistance = (o1) => {
        const [x1, y1] = o1;
        const x2 = 0;
        const y2 = 0
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }
    
    const divideAndConquer = (arr) => {
        if (!!arr.length && K) {
            const benchmark = getEuclideanDistance(arr[0])
            const left = []
            const right = []
            for (let i = 1; i < arr.length; i += 1) {
                if (getEuclideanDistance(arr[i]) < benchmark) {
                    left.push(arr[i])
                } else {
                    right.push(arr[i])
                }
            }
        
            if (left.length) {
                right.push(arr[0])
            } else {
                left.push(arr[0])
            }
            const len = left.length;

            if (K === len) {
                K -= len
                // K个点都在left中，结束递归
                reuslt = [...reuslt, ...left];
            } else if (K < len) {
                // k个点都在left中，但是left中还有多余的点，需要排查
                divideAndConquer(left)
            } else {
                // left中都是最近的点，还有一部分在right中，需要查找right
                K -= len
                reuslt = [...reuslt, ...left]
                divideAndConquer(right)
            }
        }
    }

    divideAndConquer(points)
    
    return reuslt;
};

