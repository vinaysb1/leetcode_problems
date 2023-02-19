// move-zeroes
var moveZeroes = function(nums) {
    let count = 0;
    let l = nums.length
    for(let i = 0;i<l;i++) {
        if(nums[i] == 0) {
            count++;

        } else {
            nums[i-count] = nums[i];
        }
    }
    for(let i =(l-count); i<l;i++) {
        nums[i] = 0;
    }
    return nums;
};