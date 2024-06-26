/**
Given an integer array nums that may contain duplicates, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => (a-b))
    function findAllUniqueSubsets(nums, index = 0, subsets=[], list=[]){
        list.push(subsets)
        for(let i=index;i<nums.length;i++){
            if(i != index && nums[i] === nums[i-1])
            continue;
            const curVal = nums[i]
            findAllUniqueSubsets(nums, i+1, [...subsets, curVal], list)
        
        }
        return list
    }
    return findAllUniqueSubsets(nums)
};
