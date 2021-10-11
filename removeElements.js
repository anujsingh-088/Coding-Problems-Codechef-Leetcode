/* 
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Input: head = [], val = 1
Output: []

Input: head = [7,7,7,7], val = 7
Output: []

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val, prev = null) {
    if(!head)
        return null;
    head.next = removeElements(head.next, val, head);
    if(head.val == val){
        return head.next
    }
    return head;
};
