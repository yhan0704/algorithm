nums = [2, 7, 11, 15], target = 9

var twoSum = function(nums, target) { 
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
      const sub = target - nums[i];
      if (sub in obj) {  //if in for tests for keys ****** 
        return true;
      }
  
      obj[nums[i]] = i;
    }
  
    return null;
};
console.log(twoSum(nums, target))