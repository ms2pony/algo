var canReach = function (arr, start) {
  let n = arr.length
  let map = new Array(n)
  for (let i = 0; i < n; i++) {
    map[i] = 1
  }

  let bfs = (idx) => {
    let queue = []
    queue.push(idx)
    while (queue.length) {
      let x = queue.shift()
      if (map[x] === 1) {
        map[x] = 0
        if (arr[x] === 0) return true

        let first = x - arr[x],
          second = x + arr[x]
        if (first >= 0) queue.push(first)
        if (second < n) queue.push(second)

      }
    }

    return false
  }

  return bfs(start)
};

let arr = [3, 0, 2, 1, 2], start = 2
let res = canReach(arr, start)
console.log(res)