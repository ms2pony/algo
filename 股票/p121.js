// 121. 买卖股票的最佳时机

// 贪心算法参考：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/solution/by-jyd-cu90/
// 说是说贪心，感觉又不像贪心
var maxProfit = function (prices) {
  let n = prices.length
  let minPrice = prices[0], maxProfit = 0
  for (let i = 1; i < n; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    minPrice = Math.min(minPrice, prices[i])
  }
  return maxProfit
};
