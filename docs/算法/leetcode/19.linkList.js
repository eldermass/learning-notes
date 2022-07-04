/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}
let head = new ListNode(1)
let head2 = new ListNode(2)
let head3 = new ListNode(3)
let head4 = new ListNode(4)
let head5 = new ListNode(5)
head.next = head2
head2.next = head3
head3.next = head4
head4.next = head5

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let length = 0,
        tempHead = head
    while(tempHead) {
        length++
        tempHead = tempHead.next
    }

    let dummy = new ListNode(0, head),
        index = 0,
        temp = dummy
    while (index < length - n) {
        temp = temp.next
        index++
    }
    temp.next = temp.next.next

    return dummy.next
}

console.log(removeNthFromEnd(head, 2))
