// 倒计时函数
// setTimeout和setInterval如何选择？

/**
 *
 * javascript单线程的理解
 * setTimeout是延迟一定毫秒后执行，setInterval是每隔一定毫秒后执行。但是真相并不像这两句话一样简单。比如我们这个倒计时例子里该选哪一个作为定时调用呢？
 * 首先我们都知道javascript是单线程执行的，所以以上这2个方法都是会被线程阻塞的。
 * 比如setInterval延迟设置为1000，如果内部的执行是一个耗时超过1秒的操作，那么每次重复执行的时候会造成2个问题：
 * 1，是执行被阻塞，预期是1000毫秒执行一次，实际上必须在阻塞结束后才执行。
 * 2，阻塞时，setInterval回调会被堆积，当阻塞结束后，堆积只会被消费一个，那么之后的堆积等于浪费了性能和内存。
 * 如何解决堆积问题呢？因为阻塞是不可能被解决的，那么最简单的方法就是把setInterval换成setTimeout，使用一个递归来造成每隔多久执行一次的功能。当然阻塞是无法被解决的，这里的阻塞不仅仅有回调中的，还有浏览器中的方方面面的阻塞，比如用户的一些操作行为，其他定时器等外部的阻塞，所以这也就是无论我们如何做，页面开久了，定时器都会不准，或者说，变慢的根本原因。
 */

// getMonth返回一个0 到 11的整数值： 0 代表一月份，1 代表二月份， 2 代表三月份，依次类推

const startStamp = 1571368820000
const endStamp = new Date("2019/10/18,11:20:30").getTime()

const CountDown = {
  addZero: function(n) {
    var n = parseInt(n, 10);
    return n > 0 ? n <= 9 ? ('0' + n) : (n + '') : '00';
  },
  timer: function(startStamp, endStamp) {
    const residueTime = parseInt((endStamp - startStamp) / 1000)
    const day = this.addZero(parseInt((residueTime / (24 * 60 * 60))))
    const hour = this.addZero(parseInt((residueTime / (60 * 60) % 24)))
    const minutes = this.addZero(parseInt((residueTime / 60 % 60)))
    const seconds = this.addZero(parseInt((residueTime % 60)))

    if (startStamp > endStamp) {
      console.log('over');
      return
    }
    const _timer = setTimeout(() => {
      this.timer(startStamp, endStamp - 1000);
    }, 1000);

    console.log(day, hour, minutes, seconds);
  }
}


CountDown.timer(startStamp, endStamp)
