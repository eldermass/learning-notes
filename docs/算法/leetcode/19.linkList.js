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
    let length = 1,
        tempHead = head
    while (tempHead.next) {
        length++
        tempHead = tempHead.next
    }
    // console.log(length, head)
    let skipIndex = 1
    tempHead = head
    while (true) {
        if (skipIndex = length - n) {
            tempHead.next = tempHead.next.next
            break
        }
        tempHead = tempHead.next
        skipIndex++
    }
    return tempHead
}

removeNthFromEnd(head, 2)
