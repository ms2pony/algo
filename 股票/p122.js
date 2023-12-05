// 122. 买卖股票的最佳时机 II
// 参考：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/solution/tan-xin-suan-fa-by-liweiwei1419-2/

// 贪心
// 决定前n-1天是买入还是卖出
var maxProfit = function (prices) {
  let res = 0
  for (let i = 1; i < prices.length; i++) {
    let x = prices[i] - prices[i - 1]
    //昨天买入，今天卖出
    //可以当天卖出又买入
    if (prices[i] - prices[i - 1] > 0) res += x
  }
  // [1,2,3]，2-1>0，1->买入，2->卖出；3-2>0，2->卖出，买入->不操作；3->卖出
  return res
};

// 动态规划
// dp[i][j] 表示 i 的这一天，持股状态为j时，我们手上拥有的最大现金
// 某一天的进行买入然后卖出或卖出然后买入后，状态与没有进行任何操作的值时一样的，也就是说这三个状态可以合并
// 持有 1，未持有 0
var maxProfit = function (prices) {
  let n = prices.length
  let dp = new Array(n).fill([0, 0])
  dp[0][1] = -prices[0]
  for (let i = 1; i < n; i++) {
    // 没持有
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    // 持有
    dp[i][1] = Math.max(
      dp[i - 1][0] - prices[i]
      , dp[i - 1][1] // 这包含了3个可能，前一天持有，然后今天未操作；前一天持有，今天卖出然后卖出，因为值一样，所以合并
    )
  }

  return dp[n - 1][0]
};