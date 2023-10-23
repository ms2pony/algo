/**
 * 参考：https://leetcode.cn/circle/article/htJ97s/ 原版是java代码
 * 里面另一种方法利用了 `第i个节点的左子节点为第2 * i个节点，右子节点为第2 * i + 1个节点` 这个特性，并且使用了递归
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

let rootNums = [1, 2, 3, null, 4]

let nums2Tree = (rootNums) => {
  let queue = [], root = new TreeNode(rootNums[0]), n = rootNums.length
  queue.push(root)

  let i = 1
  while (i < n) {
    let x = queue.pop()
    if (i < n) {
      if (rootNums[i] !== null) {
        x.left = new TreeNode(rootNums[i++])
        queue.push(x.left)
      } else {
        i++
      }
    }
    if (i < n) {
      if (rootNums[i] !== null) {
        x.right = new TreeNode(rootNums[i++])
        queue.push(x.left)
      } else {
        i++
      }
    }
  }

  return root
}

let root = nums2Tree(rootNums)
// console.log(root)  // 把注释打开

module.exports = nums2Tree