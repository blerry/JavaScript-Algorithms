/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []

*/
var threeSum = function(nums){
	nums.sort((a,b) => {
		return a-b;
	});
	let sol = [];

	for(let i = 0; i < nums.length - 2; i++){
		if(i > 0 && nums[i] == nums[i-1]){
			continue;
		}
		let subSol = twoSum(nums, -nums[i], i+1);

		for(let s of subSol){
			sol.push(nums[i].concat(s));
		}
	}
	return sol;
};

var twoSum = function(nums,expectedSum,start){
	let sol = [];
	let i = start;
	let j = nums.length-1;

	while(i<j){
		if(i > start && nums[i] == nums[i-1]){
			i++;
			continue;
		}
		if(j < nums.length-1 && nums[j] == nums[j+1]){
			j--;
			continue;
		}
		let sum = nums[i] + nums[j];
	
		if(sum == expectedSum){
			sol.push([nums[i++], nums[j--]]);
		}
		else if(sum > expectedSum){
			j--;
		}
		else{
			i++;
		}
	}
	return sol;	
}




