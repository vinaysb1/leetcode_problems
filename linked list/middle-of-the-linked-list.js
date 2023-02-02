https://leetcode.com/problems/middle-of-the-linked-listry

//Given the head of a singly linked list, return the middle node of the linked list.
//If there are two middle nodes, return the second middle node.
//Input: head = [1,2,3,4,5]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
     while(head != null){
        newHead.push(head);
        head = head.next;
    }
    return (newHead[Math.floor(newHead.length/2)]);
};

