/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //find middle
    let slow=head
    let fast=head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }
    let middle=slow
    //reverse the linkedlist from middle
    let prev= null
    let curr= middle
    while(curr!=null){
        let temp=curr.next
        curr.next=prev
        prev=curr
        curr=temp
    }
    
    //check for palindrome
   
    let firstlist=head
    let secondlist=prev
    while(secondlist!=null){
    if(firstlist.val!=secondlist.val){
        return false
    }
    firstlist=firstlist.next
    secondlist=secondlist.next
    }
    return true
    
};