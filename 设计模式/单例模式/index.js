// 通用单例抽象

const getSingle = function(fn) {
  let result
  return function() {
    return result || (result = fn.apply(this, arguments));
  }
}

// 单一原则  创建对象和单例各司其职
