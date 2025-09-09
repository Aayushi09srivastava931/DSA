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
    let temp=head;
    let trav=head
    let count=0
    let middle
    while(temp !=null){
        temp=temp.next
        count=count+1
    }
         middle=Math.floor(count/2)
   
    for(let i=0;i< middle;i++){
        trav=trav.next
    }
    return trav
};