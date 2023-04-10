// keep-multiplying-found-values-by-two

// var findFinalValue = function(nums, original) {
//     let set = new Set(nums);
//   for(let i = 0; i <= nums.length; i++){
//     if(set.has(original)){
//       original = original * 2;
//     }
//     else{
//       return original;
//     }
//   }
// };

// solution:1

const findFinalValue = (nums, original) => {
  let map = new Map();
  console.log(map);
  for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], 1);
  }
  while (map.get(original)) {
      original *= 2;
  }

  return original;
};
console.log(findFinalValue([5, 3, 6, 1, 12], 3)); // 24