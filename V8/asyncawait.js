// 通过微任务和协程完成
async function foo() {
  const res = await getInfo()
  console.log(res);
  console.log('111');
}

function getInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(100)
    }, 2000);
  })
}
foo()
console.log('222');
