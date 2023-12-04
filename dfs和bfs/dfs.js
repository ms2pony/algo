// 数组扁平化，dfs，利用栈，迭代实现
// 参考：https://github.com/sisterAn/JavaScript-Algorithms/issues/30 k 方法二：栈
function iteration() {
  function flatten(arr) {
    let res = [],
      stack = [...arr]

    while (stack.length) {
      let x = stack.pop()
      if (Array.isArray(x)) {
        stack.push(...x)
      } else {
        // 不要用push，而用unshift
        res.unshift(x)
      }
    }

    return res
  }

  let arr = [1, 2, 3, 4]
  console.log(flatten(arr))
}