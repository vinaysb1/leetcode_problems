// https://leetcode.com/problems/fizz-buzz/submissions

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];
    for(i=1;i<=n;i++){
        if(i%3 === 0 && i%5 === 0){
     result.push("FizzBuzz");
     continue;
 }        
    
    if (i%3 === 0){
        result.push("Fizz");
        continue;
    }
    if (i%5 === 0){
        result.push("Buzz");
        continue;
    }
    result.push(i.toString());
}
return result;
};
console.log(function(n=3));