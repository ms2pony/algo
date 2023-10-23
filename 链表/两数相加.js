/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(), tail = dummy;
  let carry = 0;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    const sum = n1 + n2 + carry

    // 添加操作
    tail.next = new ListNode(sum % 10);
    tail = tail.next; // 遍历

    // 遍历
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }

    carry = sum / 10 | 0


  }

  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  return dummy.next;
};