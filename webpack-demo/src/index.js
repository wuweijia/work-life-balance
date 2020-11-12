import './style.css'
// import spiderman from './spiderman.jpg'
import printMe from './print'

function component() {
  var element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')
  var btn = document.createElement('button');
  var br = document.createElement('br');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
