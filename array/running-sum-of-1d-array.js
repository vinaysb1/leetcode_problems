// https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function(nums) {
    let sum = [];
    let partialSum = 0;
    for(let i=0;i<nums.length;i++){        
        partialSum = partialSum + nums[i]
        sum.push(partialSum);
        
    }
    return sum;
}