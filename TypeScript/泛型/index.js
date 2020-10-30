"use strict";
// step 1
// class Queue {
//   public data = [];
//   push = item => this.data.push(item);
//   pop = () => this.data.shift();
// }
// const queue = new Queue();
// queue.push(0);
// queue.push('1'); // Oops，一个错误
// console.log(queue.data);
// step 2
// class QueueNumber {
//   public data = [];
//   push = (item: number) => this.data.push(item);
//   pop = (): number => this.data.shift();
// }
// const queue = new QueueNumber();
// queue.push(0);
// queue.push('1'); // Error: 不能推入一个 `string` 类型，只能是 `number` 类型
// step 3
// class Queue<T> {
//   public data: T[] = [];
//   push = (item: T) => this.data.push(item);
//   pop = ():T | undefined => this.data.shift()
// }
// const queue = new Queue<number>()
// queue.push(0)
// const queue2 = new Queue<string>()
// queue2.push('1')
//# sourceMappingURL=index.js.map