// 优先队列/堆  排序
// 优先队列/堆是具一些特殊性质的完全二叉树
// 因为完全二叉树的性质，可以用数组表示对应的树结构
// 1 优先队列的一些特点:
// 大根堆，顶部的值大于左右孩子的值，但不要求左右孩子值的大小关系；小根堆就是顶部的值小于左右孩子的值
// 2 特性如下：
// 2.1 第 i 个元素的左子节点为 2*i+1，第 i 个元素的右子节点为 2*i+2
// 2.2 第 i 个元素的父节点为(i-1)/2
// 2.3 最后一个非叶子节点为 arr.length/2 - 1
// 参考：https://leetcode.cn/problems/kth-largest-element-in-an-array/solution/xie-gei-qian-duan-tong-xue-de-ti-jie-yi-kt5p2/

function heapSort(arr) {
  let maxSize = arr.length
  // 1. 初始化优先队列
  for (
    let i = Math.floor(maxSize / 2) - 1 // 最后一个非叶子节点开始，最后一个叶子节点为 Math.floor(maxSize / 2) - 1
    ; i >= 0; i--) {
    heapfy(arr, i, maxSize)
  }

  // 重复步骤，直到只剩下一个
  while (maxSize > 1) {
    // 2. 取出一个，放在新数组末尾，此时末尾为最大值
    swap(arr, 0, maxSize - 1)
    // 3. heapfy
    heapfy(arr, 0, --maxSize)
  }

  function heapfy(arr, idx, n) {
    let l = 2 * idx + 1 // 左孩子下标为 2 * idx + 1
      , r = 2 * idx + 2 // 右孩子下标为 2 * idx + 2
    let larIdx = idx

    if (l < n && arr[l] > arr[larIdx]) {
      larIdx = l
    }
    if (r < n && arr[r] > arr[larIdx]) {
      larIdx = r
    }

    if (larIdx !== idx) {
      swap(arr, idx, larIdx)
      // 下面的非叶子节点可能需要重新调节
      heapfy(arr, larIdx, n)
    }
  }

  function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
}

let arr = [3, 1, 2, 4]
heapSort(arr)
console.log(arr)