// 参考：https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/solution/236-er-cha-shu-de-zui-jin-gong-gong-zu-xian-hou-xu/

var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q)
    return root
  let left = lowestCommonAncestor(root.left), right = lowestCommonAncestor(root.right)

  if (!left && !right) return // #1
  if (left && right) return root // #2
  return left ? left : right
};