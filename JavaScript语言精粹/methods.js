const a = [1,2,3]
const b = [4,5,6]

const c = a.concat(b, [8,7,9])
console.log(c);

// slice 浅复制
console.log(a.slice(1, 3));

// 如果为负 会 + a.length
console.log(a.slice(-1, 3)); // console.log(a.slice(-1 + 3, 3)) => console.log(a.slice(2, 3))

const obj = {
  name: '对象',
}
obj.age = '10'

console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('age'));
console.log(obj.hasOwnProperty('constructor'));

const demo_string = 'jintianshigehaorizi'

// 返回指定位置字符
demo_string.charAt(10)

// 返回指定字符的位置 找不到返回-1
demo_string.indexOf('in')

// 从尾部开始 返回指定字符的位置 找不到返回-1
demo_string.lastIndexOf('in')

// 查找和替换
demo_string.replace(/in/g, '-')

const oldareacode = /\((\d{3})\)/g;
const p = '(555)666-1212'.replace(/\((\d{3})\)/g, '$1-')
console.log(p);

// slice 截取一段构造新的str
const newstr = demo_string.slice(0, 10)
console.log(newstr);

