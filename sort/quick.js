let randomPartition = (arr, i, j) => {
  // mid取的是随机数
  let mid = i +
    Math.random() // random取不到1，0,1,2,3，0+(3-0+1)=4 取不到
    * (j - i + 1) | 0

  // 交换 a[i] 和 a[mid]
  let temp = arr[mid]
  arr[mid] = arr[i]
  arr[i] = temp

  // 广义tmp交换法-多次
  pivot = arr[i]
  while (i < j) {
    while (
      i < j // [2,4,3]
      && arr[j] >= pivot) j--

    arr[i] = arr[j]

    while (i < j && arr[i] <= pivot) i++

    arr[j] = arr[i]
  }
  arr[i] = pivot
  return i
}

function quickSort(arr, left, right) {
  if (left < right) {
    let pos = randomPartition(arr, left, right)
    quickSort(arr, left, pos - 1)
    quickSort(arr, pos + 1, right)
  }
}

let arr = [2, 8, 2, 4, 3, 2, 1, 1, -1]
quickSort(arr, 0, arr.length - 1)
console.log(arr)