// 前序遍历+缩小区间 法
// 参考：https://leetcode.cn/problems/validate-binary-search-tree/solution/yan-zheng-er-cha-sou-suo-shu-by-leetcode-solution/
// 二叉搜索树的定义：节点的左子树只包含 小于 当前节点的数。节点的右子树只包含 大于 当前节点的数。所有左子树和右子树自身必须也是二叉搜索树。
var isValidBST = function (root) {
  let helper = (root, lower, upper) => {
    if (!root) return true

    if (root.val <= lower || root.val >= upper) return false

    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
  }

  return helper(root, -Infinity, Infinity)
};