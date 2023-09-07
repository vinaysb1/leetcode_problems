// counter-ii

// approach-1
var createCounter = function(init) {
    let num = init;
    let obj = {
        increment: () => num = num + 1,
        reset: () => num = init,
        decrement: () => num = num - 1
    }
    
    return obj;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// approach-2

var createCounter = function(init) {
    let currentValue = init;
  return {
     increment: function () {
       currentValue++;
       return currentValue;
     },
     decrement: function () {
       currentValue--;
       return currentValue;
     },
     reset: function () {
       currentValue = init;
       return currentValue;
     },
 
    } 
 };