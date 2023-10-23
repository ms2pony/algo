/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const merge = (head1, head2) => {
  const dummy = new ListNode(0)
  let temp = dummy, temp1 = head1, temp2 = head2

  while (temp1 && temp2) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1
      temp1 = temp1.next
    } else {
      temp.next = temp2
      temp2 = temp2.next
    }
    temp = temp.next
  }

  temp.next = temp1 ? temp1 : temp2

  return dummy.next
}

// head->第一个节点；tail->最后一个节点的 next 字段
const toSortList = (head, tail) => {
  if (!head) return head

  if (head.next === tail) {
    // 有了这行代码后，从长度为1的链表开始，所有链表断开，这样再merge函数中就能够用 !temp1 判断 链表是否遍历完全了
    head.next = null

    return head
  }

  let slow = head, fast = head
  while (fast !== tail) {
    slow = slow.next
    fast = fast.next
    if (fast !== tail) {
      fast = fast.next
    }
  }
  const mid = slow
  return merge(toSortList(head, mid), toSortList(mid, tail))
}

var sortList = function (head) {
  return toSortList(head, null)
}