/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head==null){
    return null
    }
    let curr=head
    prev=null

    while(curr!=null){
        let temp=curr.next
        curr.next=prev
        prev=curr
        curr=temp
    }
    if(n===1){
        prev=prev.next
    }
    else{

    let ans=prev
    for(let i=0;i<n-2 && ans!=null;i++){
        ans=ans.next
    }
    if(ans!=null && ans.next!=null){
    ans.next=ans.next.next
    }
    }
   let lastnodeprev=null
    while(prev!=null){
        let moving=prev.next
        prev.next=lastnodeprev
        lastnodeprev=prev
        prev=moving
    }
    return lastnodeprev
};