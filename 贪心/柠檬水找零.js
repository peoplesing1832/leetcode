/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const piggyBank = {
        5: 0,
        10: 0,
        20: 0
    };
    // 优先使用最大的面值找零
    const givesChange = (money) => {
        if (money - 20 >= 0 && piggyBank[20]) {
            money = money - 20
            piggyBank[20] -= 1
        } else if (money - 10 >= 0 && piggyBank[10]) {
            money = money - 10
            piggyBank[10] -= 1
        } else if (money - 5 >= 0 && piggyBank[5]) {
            money = money - 5
            piggyBank[5] -= 1
        }
        if (money === 0) {
            return true
        } else {
            if (
                (money >= 10 && piggyBank[10] && piggyBank[5]) ||
                (money >= 5 && piggyBank[5])
            ) {
                return givesChange(money)
            } else {
                return false
            }
        }
    };
    for (let i = 0; i < bills.length; i++) {
        console.log(piggyBank)
        if (bills[i] === 5) {
            piggyBank[5] += 1;
        } else {
            if (!givesChange(bills[i] - 5)) {
                return false
            }
            piggyBank[bills[i]] += 1;
        }
    }
    return true
};
