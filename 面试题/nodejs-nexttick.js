setTimeout(function () {
  console.log('timeout')
})

process.nextTick(function () {
  console.log('nextTick 1')
})

new Promise(function (resolve) {
  console.log('Promise 1')
  resolve();
  console.log('Promise 2')
}).then(function () {
  console.log('Promise Resolve')
})

process.nextTick(function () {
  console.log('nextTick 2')
})
