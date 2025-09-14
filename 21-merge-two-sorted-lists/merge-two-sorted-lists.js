/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1==null && list2==null){
        return null
    }
    if(list1==null){
        return list2
    }
    if(list2==null){
        return list1
    }
    let temp=list1
    let trav=list2
    let dummy=new ListNode()
    let prev=dummy
    while(temp && trav){
        if(temp.val<trav.val){
            prev.next=temp
            temp=temp.next
            prev=prev.next
        }
        else{
            prev.next=trav
            trav=trav.next
            prev=prev.next
        }
    }
    if(temp==null){
        prev.next=trav
    }
    if(trav==null){
        prev.next=temp
    }
    return dummy.next
};