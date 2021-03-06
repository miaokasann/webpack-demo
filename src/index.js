import _ from 'lodash';
import './style.css';
import Img from './aaa.jpg';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myImg = new Image();
  myImg.src = Img;

  element.appendChild(myImg);

  btn.innerHTML = '点我查询console';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());