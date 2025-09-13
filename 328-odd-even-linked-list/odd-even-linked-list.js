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
var oddEvenList = function(head) {
    let result=[]
    let temp=head
    while(temp!=null){
        result.push(temp.val)
        temp=temp.next
    }
    let odd=[]
    let even=[]
    for(let i=0;i<result.length;i++){
        if(i%2==0){
            odd.push(result[i])
        }
        else{
            even.push(result[i])
        }
    }
       odd=odd.concat(even)
    let length1=odd.length
    const dummy=new ListNode()
    let tail=dummy
    for(let i=0;i<length1;i++){
        tail.next=new ListNode(odd[i])
        tail=tail.next
    }

    return dummy.next
};