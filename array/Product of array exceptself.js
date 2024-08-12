var productExceptSelf = function(nums) {
    // Array to store all left multiplication
    const left = new Array(nums.length);

    // Array to store all right multiplication
    const right = new Array(nums.length);

    left[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    right[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    const ans = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        ans[i] = left[i] * right[i];
    }

    return ans;
};

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]