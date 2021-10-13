/*

Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, low = 0, high = nums.length - 1) {
    var mid = Math.floor((low+high)/2);
    var value = nums[mid];
    var root = new TreeNode(value);
    if(low <= mid - 1)
        root.left = sortedArrayToBST(nums, low, mid-1);
    if(high >= mid + 1)
    root.right = sortedArrayToBST(nums, mid+1, high);
    return root;
    
};
