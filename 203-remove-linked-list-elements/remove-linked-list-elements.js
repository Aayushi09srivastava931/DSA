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
var removeElements = function(head, val) {
    if(head==null){
        return head
    }
    while(head!=null && head.val==val){
        head=head.next
    }
    let temp=head
    let trav=temp
    while(temp!=null){
        if(temp.val===val){
            trav.next=temp.next
            temp=temp.next
        }
        else{
        trav=temp
        temp=temp.next
        }
    }
    return head
};