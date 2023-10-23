// [[有序(从小到大)], [无序]]
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
}

let arr = [1, 3, 2, 5, 4]
bubbleSort(arr)
console.log(arr) // [1, 2, 3, 4, 5]