//https://leetcode.com/problems/richest-customer-wealth

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for(i=0;i<accounts.length;i++){
        let tempSum = accounts[i].reduce((a,b) => a+b);
        if(tempSum>maxWealth){
            maxWealth = tempSum
        }
    }
    return maxWealth;
    
};
console.log(maximumWealth([[1,2,3],[3,2,1]])); 
// output : 6

//https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero
var numberOfSteps = function(num) {
    let count = 0;
   while (num !== 0){
       if(num%2 === 0){
       num = num/2;
       count++;
       }
      else if(num %2 !== 0){
           num = num-1;
           count++;
       }
   }
   return count;
};
console.log(numberOfSteps(num = 14)); 
//output: 6

//https://leetcode.com/problems/running-sum-of-1d-array
var runningSum = function(nums) {
    let sum = [];
    let partialSum = 0;
    for(let i=0;i<nums.length;i++){        
        partialSum = partialSum + nums[i]
        sum.push(partialSum);
        
    }
    return sum;
}
console.log(runningSum ([1,2,3,4]));
//output: [1, 3, 6, 10]