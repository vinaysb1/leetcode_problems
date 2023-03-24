// fibonacci-number 1-line

const fib = (n, res = [0, 1]) => (n == 0 || n == 1 || res[n]) ? res[n] : res[n] = fib(n - 1, res) + fib(n - 2, res);


// // fibonacci-number