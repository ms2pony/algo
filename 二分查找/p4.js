// 4. 寻找两个正序数组的中位数
// https://leetcode.cn/problems/median-of-two-sorted-arrays/solution/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/

// 普通二分查找的是满足某个条件的数，结束条件是(left<right)
// 找中位数的二分查找，是排除k个数，所以当k>0时都能继续查找

// 代码很经典
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length, n2 = nums2.length
  let n = n1 + n2
  if (n % 2 === 1) {
    let midIndex = n / 2 | 0
    let median = findKthEle(midIndex + 1)
    return median
  } else {
    let midIndex1 = (n / 2 | 0) - 1, midIndex2 = n / 2 | 0
    return (findKthEle(midIndex1 + 1) + findKthEle(midIndex2 + 1)) / 2
  }


  function findKthEle(k) {
    let n1 = nums1.length, n2 = nums2.length
    // 剔除不满足的数后数组的开始下标
    let index1 = 0, index2 = 0

    while (true) {
      // 边界情况
      if (index1 === n1) {
        return nums2[index2 + k - 1]
      }
      if (index2 === n2) {
        return nums1[index1 + k - 1]
      }
      if (k == 1) {
        return Math.min(nums1[index1], nums2[index2])
      }

      // 正常情况
      let half = k / 2 | 0
      let newIndex1 = Math.min(index1 + half, n1) - 1
      let newIndex2 = Math.min(index2 + half, n2) - 1
      let pivot1 = nums1[newIndex1], pivot2 = nums2[newIndex2]

      if (pivot1 <= pivot2) {
        k -= (newIndex1 - index1 + 1);
        index1 = newIndex1 + 1;
      } else {
        k -= (newIndex2 - index2 + 1);
        index2 = newIndex2 + 1;
      }
    }
  }
};

let nums1 = [1, 2],
  nums2 = [3, 4]

let res = findMedianSortedArrays(nums1, nums2)
console.log(res)