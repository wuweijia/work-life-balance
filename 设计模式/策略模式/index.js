// 利用多态性 实现策略模式

const strategies = {
  "S": e => {
    return e * 4
  },
  "A": e => {
    return e * 3
  },
  "B": e => {
    return e * 2
  }
}

const claculate = function(level, salary) {
  return strategies[level](salary)
}

console.log(claculate("S", 2000))
