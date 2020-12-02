/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const collection = [];
    const result = [];
    // 用于去重
    const hash = {};

    for (let i = 1; i <= n; i++) {
        collection.push(i);
    }

    if (collection.length === k) {
        // 如果k等于长度，直接返回集合
        return [collection];
    }

    const merge = (head, other) => {
        if (other.length && head.length < k) {
            for (let i = 0; i < other.length; i++) {
                const temp = [...other];
                temp.splice(i, 1);
                merge([...head, other[i]], [...temp]);
            }
        } else {
            head.sort((m, n) => m - n);
            const key = head.join(',');
            if (!hash[key]) {
                hash[key] = true;
                result.push(head);
            }
        }
    }

    for (let i = 0; i < collection.length; i++) {
        const temp = [...collection];
        temp.splice(i, 1);
        merge([collection[i]], [...temp]);
    }

    return result;
};


