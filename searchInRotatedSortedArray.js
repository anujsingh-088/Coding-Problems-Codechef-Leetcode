/*

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l,r;
    let zeroIndex = findFirstIndex(nums);
    if(nums[zeroIndex] === nums[0]){
        l = 0;
        r= nums.length - 1;
    } else if(nums[0]<=target){
        l = 0; r=zeroIndex-1;
    } else{
        l = zeroIndex; r = nums.length - 1
    }
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid] === target)
            return mid;
        else if(nums[mid]<target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return -1;
    
    // for(let i=0;i<nums.length && l<=r;i++){
    //     console.log('left ',l)
    //     console.log('right ',r)
    //     let mid = Math.floor((l+r)/2);
    //     if(nums[mid] === target)
    //         return mid;
    //     // else if((target < nums[l] && nums[mid] > target)){
    //     else if( nums[mid] > target && nums[l] > target){
    //         r = mid - 1;
    //     } else if( nums[mid] < target && nums[l] < target)
    //         l = mid + 1;
    // }
    // return -1;
};
function findFirstIndex(nums, l=0, r=nums.length){
    if(nums.length === 1)
        return 0;
    if(nums[0]<nums[nums.length-1])
        return 0
    while(l<r){
        let mid = Math.floor((l+r)/2);
        if(mid<nums.length-1 && nums[mid]>nums[mid+1])
            return mid+1;
        else if(mid>0 && nums[mid]<nums[mid-1])
            return mid
        else if(nums[mid]>nums[0])
            l=mid+1
        else
            r=mid-1;
    }
}

// [7,8,9,10,11,12,13,0,1,3,4,5,6]
// 6
// [7,8,9,10,11,12,13,0,1,3,4,5,6]
// 7
// [7,8,9,10,11,12,13,0,1,3,4,5,6]
// 13
// [7,8,9,10,11,12,13,0,1,3,4,5,6]
// 0
// [1,2,3,4,5,6,7,8,9]
// 1
// [1,2,3,4,5,6,7,8,9]
// 9
