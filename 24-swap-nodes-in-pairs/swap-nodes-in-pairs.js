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
var swapPairs = function(head) {
    if(head==null){
        return null
    }
    if(head.next==null){
        return head
    }
    let temp=head
    let trav=temp.next
    let dummy=new ListNode()
    let prev=dummy

    while( temp && temp.next){
        prev.next=trav
        temp.next=trav.next
        trav.next=temp


        prev=temp
        temp=prev.next
        trav=temp && temp.next
    }
    return dummy.next
};