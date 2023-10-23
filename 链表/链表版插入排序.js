/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 参考：https://leetcode.cn/problems/insertion-sort-list/solution/dui-lian-biao-jin-xing-cha-ru-pai-xu-by-leetcode-s/
var insertionSortList = function (head) {
  let dummy = new ListNode(0)
  dummy.next = head

  let lastSort = head, cur = lastSort.next

  while (cur) {
    if (lastSort <= cur.val) {
      lastSort = lastSort.next
    } else {
      let pre = dummy
      while (pre.next.val < cur.val) pre = pre.next

      lastSort.next = cur.next // 删除操作，无序区第一个元素被移到走

      // 插入操作
      cur.next = pre.next
      pre.next = cur
    }
  }
};