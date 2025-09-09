/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let curr=head
    let seennode=new Set()
    while(curr!=null){
        if(seennode.has(curr)){
            return true
        }
        seennode.add(curr)
        curr=curr.next
    }
    return false
};