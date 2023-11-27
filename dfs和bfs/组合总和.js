// 40. 组合总和 II
// 要点：排序；去重；某一个步骤选择的数不能一样
// 组合问题，和排列问题的区别在于不分先后顺序
var combinationSum2 = function (candidates, target) {
  // 为了去重
  candidates.sort((a, b) => a - b)  // 大于零，a在后，小于0，a在前

  let res = [], tmpRes = [],
    n = candidates.length

  let dfs = (begin) => {
    if (target === 0) res.push(tmpRes.slice())

    for (let i = begin; i < n; i++) {
      // i 从 begin 开始的目的是因为这是组合问题，不分先后顺序
      if (i > begin && candidates[i] === candidates[i - 1]) continue  // 剪枝，保证不出现 [1,1,2]=>[1,2]和[1,2]

      // 剪枝，candidates 从大到小排列过了，所以target小于0，后面就不可能了，这个剪枝没有会超时
      if (target - candidates[i] < 0) break

      target -= candidates[i]
      tmpRes.push(candidates[i])
      dfs(i + 1)
      tmpRes.pop()
      target += candidates[i]
    }
  }

  dfs(0)

  return res
};

let candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
let res = combinationSum2(candidates, target)
console.log(res)