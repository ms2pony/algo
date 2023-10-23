// 参考：https://leetcode.cn/problems/swap-nodes-in-pairs/

var swapPairs = function (head) {
  let dummy = new ListNode(0, head)
  let cur = dummy

  // 遍历时只管理一个指针
  while (cur.next && cur.next.next) {
    // 临时指针
    let first = cur.next, second = cur.next.next

    first.next = second.next  // 删除

    // 插入操作
    cur.next = second
    second.next = first

    cur = first
  }
  return dummy.next
};