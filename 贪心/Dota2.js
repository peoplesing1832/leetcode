/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const R = [];
    const D = [];
    let ri = 0;
    let di = 0;

    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') {
            R.push(i)
        } else {
            D.push(i)
        }
    }

    while (R.length && D.length) {
        if (R[ri] === undefined && D[di] === undefined) {
            ri = 0
            di = 0
            continue;
        }

        if (R[ri] < D[di]) {
            ri += 1;
            D.splice(di, 1);
            continue;
        }

        if (D[di] < R[ri]) {
            di += 1
            R.splice(ri, 1);
            continue;
        }

        if (
            R[ri] === undefined &&
            D[di]
        ) {
            R.shift()
            di += 1;
            continue;
        }

        if (
            R[ri] &&
            D[di] === undefined
        ) {
            D.shift()
            ri += 1;
            continue;
        }
        
    }

    return R.length ? 'Radiant' : 'Dire'
};
