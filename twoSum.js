nums = [2, 11, 7, 15], target = 9

var twoSum = function(nums, target) { 
    let obj = {}
    let emptyArray =[]
    for(let i = 0; i < nums.length; i++){
        let pairNums = target - nums[i]
        obj[nums[i]] = i
        console.log(obj[7])
        if(pairNums in obj){
            emptyArray.push(obj[pairNums], i)
            return emptyArray
    }
};
}
console.log(twoSum(nums, target))