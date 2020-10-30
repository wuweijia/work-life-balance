// 请实现一个遍历至100的循环，在能被3整除时输出“three”，在能被5整除时输出 “five”，在能同时被3和5整除时输出“all”

for (let i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('all');
  } else if (i % 3 === 0) {
    console.log('three');
  } else if (i % 5 === 0) {
    console.log('five');
  }
}
