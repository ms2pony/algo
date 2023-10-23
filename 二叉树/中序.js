/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 不用全局变量的做法
var inorderTraversal = function (root) {
  if (!root) return []
  let left = inorderTraversal(root.left)
  let right = inorderTraversal(root.right)

  return [...left, root.val, ...right]
};