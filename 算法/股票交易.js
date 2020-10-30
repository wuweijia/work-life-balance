// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 示例 1:

// 输入: [7, 1, 5, 3, 6, 4]
// 输出: 7
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
// 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
// 示例 2:

// 输入: [1, 2, 3, 4, 5]
// 输出: 4
// 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
// 注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
// 因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let total = 0
  for (let index = 1; index < prices.length; index++) {
    const yesterday = prices[index - 1];
    const today = prices[index];

    if (today > yesterday) {
      total += today - yesterday
    }
  }
  console.log(total);
  return total
};

maxProfit([7, 6, 4, 3, 1])
