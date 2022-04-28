var nums = [2,7,11,15]; 
var target = 9 
// Output [0,1]
//9-2 = 7 save 7 in map 0
// if map has 7 then return because it does
//9-7 = 2 
var twoSum = function(nums, target) {
    var m = new Map;
    for(let i =0; i < nums.length; i++){
        //m.put(i,nums[i]); 
        let difference = target - nums[i];
        if (m.has(nums[i]))
            return [i,m.get(nums[i])];
        else
            m.set(difference,i); 
    }
};


twoSum(nums,target);
console.log(0);