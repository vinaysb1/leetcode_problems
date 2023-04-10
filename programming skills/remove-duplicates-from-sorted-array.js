// /remove-duplicates-from-sorted-array
var removeDuplicates = function(nums) {
    
    for(let i=0;i<nums.length-1;i++){
    
             if(nums[i] == nums[i+1]){
                nums.splice(i,1)
                i--;
             }     
        }
    };

    // solution-2
    const removeDuplicates = (nums) => {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                nums.splice(i + 1, 1);
                i--;
            }
        }
        return nums.length;
    };