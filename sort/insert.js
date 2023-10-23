function insertSort(arr) {
  // [[有序(从小到大)], [无序]]
  // 每次选右边第一个，然后在左边找位置，从左边的最后一个元素开始
  // 直到右边没有元素
  for (let i = 1; i < arr.length; i++) {
    // 广义tmp交换法-一次(自己取的名字)
    let temp = arr[i], j = i - 1
    for (; j >= 0; j--) {
      if (temp < arr[j]) arr[j + 1] = arr[j]
      else break
    }
    arr[j + 1] = temp
  }
}

let arr = [8, 2, 4, 3, 1, -1]
insertSort(arr)
console.log(arr)
