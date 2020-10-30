// 发布订阅模式

// 你想买房的时候，一般要去售楼部看一看，结果房子都卖完了，你留了一个电话希望有人卖的话，可以联系你


// 定义售楼处
var salesOffices = {};

// 缓存列表，存放订阅者的回调函数
salesOffices.clientList = {};

// 订阅的消息添加进缓存表
salesOffices.listen = function (key, fn) {
  /**
   * 目前的推送是向所有人推送，如果有人只想买一期的房子，那二期的房源就不应该推送给一期的订阅者
   * 添加一个key 对订阅者分类
   */

  // 如果一开始没有的分类，那么创建一个分类
  if (!this.clientList[key]) {
    this.clientList[key] = []
  }
  this.clientList[key].push(fn);
};

// 编写发布函数
salesOffices.trigger = function () {

  // 这里的arguments是一个 obj类型  需要用call方法拿到数组的shift方法 来取出第一个参数 key
  /**
   * shift 方法并不局限于数组：这个方法能够通过 call 或 apply 方法作用于类似数组的对象上。但是对于没有 length 属性（从0开始的一系列连续的数字属性的最后一个）的对象，调用该方法可能没有任何意义。
   */

  const key = Array.prototype.shift.call(arguments);

  const fns = this.clientList[key]

  try {
    if (!fns) {
      throw new Error('没有该类型订阅者')
    }
  } catch (e) {
    console.log(e)
  }

  // 如果消息队列为空 就不执行了
  if (!fns.length) return

  for (let index = 0; index < fns.length; index++) {
    // 通过apply将参数传给执行函数
    const fn = fns[index]
    fn.apply(this, arguments);
  }
}

// 创建一个订阅者
salesOffices.listen('一期', function (square, price, phonenum ){
  console.log('面积', square);
  console.log('价格' + price);
  console.log('卖房人电话' + phonenum);
});

// 通知所有想买房的人
salesOffices.trigger('一期', '110', '80万', '130xxxxxxx1')
// salesOffices.trigger('二期', '100', '90万', '130xxxxxxx0')


