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
var deleteDuplicates = function(head) {
    if(head === null){
        return head
    }
    let temp = head
    while(temp !=null && temp.next != null){
        if(temp.val === temp.next.val){
        temp.next = temp.next.next
        }
    else{
        temp=temp.next
    }
    }
    return head
};