// https://leetcode.com/problems/contains-duplicate
const containsDuplicate = function (nums) {
    let num1 = new Set() 
    for(let i=0;i<nums.length;i++){
if(num1.has(nums[i])){
    return true;
}
num1.add(nums[i])
}
   return false;
};
console.log(containsDuplicate([1,2,3,4]));