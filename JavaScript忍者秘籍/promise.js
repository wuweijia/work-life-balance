console.log('script start');

// 微任务
Promise.resolve().then(() => {
  console.log('p 1');
});

// 宏任务
setTimeout(() => {
  console.log('setTimeout');
}, 0);

var s = new Date();
while (new Date() - s < 50); // 阻塞50ms

// 微任务
Promise.resolve().then(() => {
  console.log('p 2');
});

console.log('script ent');

setTimeout(_ => console.log(4))

new Promise(resolve => {
  resolve()
  console.log(1)
}).then(_ => {
  console.log(3)
  Promise.resolve().then(_ => {
    console.log('before timeout')
  }).then(_ => {
    Promise.resolve().then(_ => {
      console.log('also before timeout')
    })
  })
})

console.log(2)

/**
 * 初始化过程中的script属于宏任务
 */
// script start
// script ent
// 1
// 2
// p 1
// p 2
// 3
// before timeout
// also before timeout
// setTimeout
// 4



let j = () => {
  return 2
}
new Promise((resolve, reject) => {
  resolve(1)
}).then(j).then(req => {
  console.log('---------', req);    //2
})
