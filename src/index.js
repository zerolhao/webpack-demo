import _ from 'lodash';
import './style.css';
import IconHome from './icon-home.png';
import IconEye from './icon-eye.png';

function component() {
  var element = document.createElement('div')

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  // 将图像添加到我们现有的 div
  var iconHome = new Image()
  iconHome.src = IconHome

  element.appendChild(iconHome)

  return element
}

document.body.appendChild(component())