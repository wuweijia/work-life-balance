
var n = 1;
(function foo() {
  n = 100;
  console.log(n);
}())
console.log(n);


var n = 1;
function foo() {
  n = 100;
  console.log(n);
}
console.log(n);
foo()
