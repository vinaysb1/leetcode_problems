// single-element-in-a-sorted-array
const singleNonDuplicate = nums => {
    //Compare consecutive numbers and increment by 2 in each iteration
    for (let i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }
    return nums[nums.length - 1]; // The last element is the only single element.
}