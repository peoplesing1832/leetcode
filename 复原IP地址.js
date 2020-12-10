/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];

    const isLegal = (n) => {
        if (n.length <= 0) {
            return false
        }
        if (n.length > 1 && n[0] === '0') {
            return false
        }
        if (Number(n) > 255 || Number(n) < 0) {
            return false
        }
        return true
    }

    const fn = (head, tail, n) => {        
        if (n <= 0) {
            if (isLegal(tail)) {
                result.push(`${head}.${tail}`)
            }
        } else {
            for (let i = 0; i < 3; i++) {
                const h = tail.slice(0, i + 1);
                if (isLegal(h)) {
                    let newHead = ''
                    if (head.length) {
                        newHead = `${head}.${h}`;
                    } else {
                        newHead = `${h}`;
                    }
                    const t = tail.slice(i + 1);
                    fn(newHead, t, n - 1);
                }
            }
        }
    };

    fn('', s, 3);

    return result;
};
