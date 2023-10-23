// dfs
var rightSideView = function (root) {
  let res = []
  let dfs = (root, deep) => {
    // 压栈的时候执行的代码，
    // 压栈的顺序是 root， r，r.r，r.r.r；如果r.r.r为空，则r.r.l 作为第3层的第一个元素进入res
    if (!root) return
    if (deep === res.length) res.push(root.val)

    dfs(root.right, deep + 1)
    dfs(root.left, deep + 1)
  }
  dfs(root, 0)

  return res
}

// bfs
var rightSideView = function (root) {
  let queue = [], res = []
  if (root) queue.push(root) // if用于判断空树的情况

  while (queue.length) {
    let n = queue.length
    for (let i = 0; i < n; i++) {
      const x = queue.shift()
      if (i === 0) res.push(x.val)
      // x千万不要写成root了！
      if (x.right) queue.push(x.right)
      if (x.left) queue.push(x.left)
    }
  }

  return res
}

root = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 5
    }
  },

  right: {
    val: 3,
    left: null,
    right: {
      val: 4
    }
  }
}

rightSideView(root)