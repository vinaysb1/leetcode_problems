// 202. Happy Number
const isHappy = function (n) {
    let seen = new Set();
    while (n != 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }
    return n == 1;
};
const getNext = (n) => {
    let totalSum = 0;
    while (n > 0) {
        d = n % 10;
        n = parseInt(n / 10);
        totalSum += d * d;
    }
    return totalSum;
}