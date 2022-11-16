var sum_to_n_a = function(n) { 
    // your code here
    if (n == 1) {
        return n
    } else {
        return n + sum_to_n_c(n - 1)
    }
};

var sum_to_n_b = function(n) { 
    // your code here
    let sum = 0
    for (let i = 1; i < n + 1; i++) {
        sum += i
    }
    return sum
};

var sum_to_n_c = function(n) {
    // your code here
    return n * (n + 1) /  2
};
a = sum_to_n_a(5)
b = sum_to_n_b(5)
c = sum_to_n_c(5) 
console.log("sum to n a: %d", a)
console.log("sum to n b: %d", b)
console.log("sum to n c: %d", c)