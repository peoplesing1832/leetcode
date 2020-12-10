/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];

    const isLegal = (n) => {
        if (n.length > 1 && n[0] === '0') {
            return false
        }
        if (Number(n) > 255 || Number(n) < 0) {
            return false
        }
        return true
    }

    const fn = (head, tail, n) => {
        // console.log(head)
        if (n > 0) {
            for (let i = 0; i < 3; i++) {
                const h = tail.slice(0, i + 1);
                if (isLegal(h)) {
                    if (head.length) {
                        head = `${head},${h}`;
                    } else {
                        head = `${h}`;
                    }
                    const t = tail.slice(i + 1);
                    console.log(h)
                    console.log(head)
                    console.log('-=========')
                    fn(head, t, n - 1);
                }
            }
        } else if (n === 0 && isLegal(tail)) {
            result.push(`${head},${tail}`)
        }
    };

    fn('', s, 2);

    console.log(result)

    return result;
};

restoreIpAddresses("25525511135")
