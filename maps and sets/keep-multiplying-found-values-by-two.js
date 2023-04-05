// keep-multiplying-found-values-by-two

var findFinalValue = function(nums, original) {
    let set = new Set(nums);
  for(let i = 0; i <= nums.length; i++){
    if(set.has(original)){
      original = original * 2;
    }
    else{
      return original;
    }
  }
};