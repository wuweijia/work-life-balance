import './style.css'
// import spiderman from './spiderman.jpg'
import printMe from './print'

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  // // 将图像添加到我们现有的 div。
  // var img = new Image();
  // img.src = spiderman;

  // element.appendChild(img);

  var btn = document.createElement('button');
  var br = document.createElement('br');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
