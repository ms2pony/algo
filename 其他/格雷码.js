var circularPermutation = function (n, start) {
  let arr = new Array(2 ** n)
  let m = arr.length

  for (let i = 0; i < m; i++) {
    arr[i] = i ^ (i >> 1)
  }

  let startIndex
  for (let i = 0; i < m; i++) {
    if (arr[i] === start) {
      startIndex = i
      break
    }
  }
  let tmpArr = arr.slice(0, startIndex)
  console.log(tmpArr)
  arr.splice(0, startIndex)
  arr.push(...tmpArr)
  return arr
};

console.log(circularPermutation(2, 3))