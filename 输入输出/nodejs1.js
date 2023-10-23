const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
  // N个商品，X有多少钱，Y张折扣券
  let arrs = []
  let tmp = await readline()
  let [N, X, Y] = tmp.split(' ').map(v => parseInt(v))
  let oldX = X
  while (line = await readline()) {
    let arr = line.split(' ').map(v => parseInt(v))
    arrs.push(arr)
  }

  let compare = (a, b) => {
    if ((a[0] - a[1]) - (b[0] - b[1]) !== 0) {
      return (a[0] - a[1]) - (b[0] - b[1])
    } else {
      return b[0] - a[0]
    }
  }

  arrs.sort(compare)

  let count = 0, i = 0
  for (; i < Y && X >= 0; i++) {
    if (X >= arrs[i][1]) {
      X -= arrs[i][1]
      count++
    }
  }

  console.log("arrs:\n", arrs)

  arrs = arrs.slice(i)

  arrs.sort((a, b) => {
    return a[0] - b[0]
  })

  for (let i = 0; i < arrs.length; i++) {
    if (X >= arrs[i][0]) {
      X -= arrs[i][0]
      count++
    }
    else break
  }

  console.log(count, oldX - X)

}()