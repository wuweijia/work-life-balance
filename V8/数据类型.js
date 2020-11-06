const a = 1
const b = '2'

console.log(a.valueOf());
console.log(b.valueOf());

console.log(a + b);
console.log(b + a);


// var Obj = {
//   toString() {
//     return '200'
//   },
//   valueOf() {
//     return 100
//   }
// }


var Obj = {
  toString() {
    return '3'
  },
  valueOf() {
    return new Object()
  }
}

console.log(Obj + 3);
// console.log(Obj + '3');
