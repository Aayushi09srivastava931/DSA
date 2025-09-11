/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let temp=headA
    let trav=headB
    let set=new Set()
    while(temp!=null){
        
        set.add(temp)
        temp=temp.next
    }
    while(trav!=null){
        if(set.has(trav)){
            return trav
        }
        else{
            trav=trav.next
        }
    }
    return null
};