// counter-solution
// method-1
var createCounter = function(n) {
    return function() {
         return n++; 
    };
};


//method-2
var createCounter = function(n) {
    let count=n;
    return function() {
        return count++;
    };
};

