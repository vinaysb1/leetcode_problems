// kth-largest-element-in-an-array
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a)
    return nums[k - 1]
};

// kth-largest-element-in-an-array (1line soloution)

  
const findKthLargest = (nums, k) => nums.sort((a, b) => b - a)[k - 1];