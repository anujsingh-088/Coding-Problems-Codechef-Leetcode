/**
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

// Optimised
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 function swap(nums, i,j){
    const temp = nums[i];
    nums[i] = nums[j]
    nums[j] = temp;
 }
var permute = function(nums) {
    const result = []
    function getPermuations(nums,index=0){
        if(index == nums.length){
            result.push([...nums])
            return;
        }
        for(let i=index;i<nums.length;i++){
            swap(nums, i, index)
            getPermuations(nums, index+1)
            swap(nums, i, index)
        }
    }
    getPermuations(nums)
    return result
};

// Brute Force
/**
var permute = function(nums) {
    const hash = {}, result = []
    function getPermuations(nums, sq = []){
        if(sq.length == nums.length){
            result.push(sq)
            return;
        }
        for(let i=0;i<nums.length;i++){
            if(hash[i] === i){
                continue;
            }
            hash[i] = i
            const curVal = nums[i];
            getPermuations(nums, [...sq, curVal])
            hash[i] = false
        }
    }
    getPermuations(nums)
    return result
};

 */
