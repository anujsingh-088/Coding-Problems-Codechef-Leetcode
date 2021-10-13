/*

Given the head of a linked list, rotate the list to the right by k places.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]
 

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var lengthOfLL = function(head){
    var length = 0;
    while(head !== null){
        head = head.next;
        length++;
    }
     
    return length;
}
var rotateRight = function(head, k) {
    var length = lengthOfLL(head);
    if(length === 0)
        return head
    var ptr = head;
    var temp = head
    if(length <= k){
        k = k%length
    }
    length = 0;
    
    while(ptr.next !== null){
        length++;
        if(length > k){
            temp = temp.next;
        }
        ptr = ptr.next
    }
    ptr.next = head;
    head = temp.next;
    temp.next = null
    return head;
};
