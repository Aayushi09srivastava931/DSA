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
    let prev = null;     // previous node starts as null
    let temp = head;     // temp starts at head

    while (temp != null) {
        if (temp.val == val) {
            if (prev == null) {
                head = temp.next;  // removing head node
            } else {
                prev.next = temp.next; // skip current node
            }
        } else {
            prev = temp;  // move prev forward only if not deleted
        }
        temp = temp.next;  // move to next node
    }
    return head;
};
