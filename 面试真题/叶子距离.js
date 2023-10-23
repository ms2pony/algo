// 核心代码模式
// 科大讯飞2023 前端第三题
// 具体题目描述 参考：https://www.nowcoder.com/discuss/464533242813730816?sourceSSR=dynamic

// 公共祖先问题的变体
function leafPairs(root, k) {
  let res = 0
  // 函数f(node)返回的数组 now，now的下标x表示node的所有叶子节点到node父亲节点的距离，值now[x]表示距离为x的叶子节点有多少个
  const f = (node) => {
    // 后序遍历
    // 遍历每个节点，每个节点视为公共祖先
    if (!node) return []
    if (!node.left && !node.right) {
      // 下标0对应的元素没有意义
      return [0, 1]
    }

    const l = f(node.left)
    const r = f(node.right)

    for (let i = 1; i < k; i++) {
      // l[i]*r[k-i]，如果l[i] 或 r[k-i] 不存在，那么就视为0
      res += (l[i] ? l[i] : 0) * (r[k - i] ? r[k - i] : 0)
    }

    const now = []
    for (let i = 1; i <= l.length || i <= r.length; i++) {
      // 高了一层，原来的 r[i-1] 和 l[i-1] 中的 i-1 变为 i，并且将两者的值相加存入now[i]中
      now[i] = (r[i - 1] ? r[i - 1] : 0) + (l[i - 1] ? l[i - 1] : 0)
    }

    return now
  }

  f(root)

  return res
}

let root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3
  }
}

let res = leafPairs(root, 3)

console.log(res)