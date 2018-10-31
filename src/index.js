import _ from 'lodash';
import './style.css';
import IconHome from './icon-home.png';
import IconEye from './icon-eye.png';
import xmlData from './xml-data.xml';
import jsonData from './json-data.json';

function component() {
  var element = document.createElement('div')

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  var h1 = document.createElement('h1')
  h1.innerHTML = _.join(['Hello', 'webpack'], ' ')
  h1.classList.add('hello')

  element.appendChild(h1)

  // 将图像添加到我们现有的 div
  var iconHome = new Image()
  iconHome.src = IconHome

  element.appendChild(iconHome)

  // 将xml文件数据填充到页面，正常应该不是我这么填充
  //console.log(xmlData)
  var note = document.createElement('div')
  var header = document.createElement('header')
  var con = document.createElement('div')
  var fromA = document.createElement('p')
  var toB = document.createElement('p')
  header.innerHTML = xmlData.note.heading.join(' ')
  con.innerHTML = xmlData.note.body.join(' ')
  fromA.innerHTML = xmlData.note.from.join(' ')
  toB.innerHTML = xmlData.note.to.join(' ')
  note.appendChild(header)
  note.appendChild(con)
  note.appendChild(fromA)
  note.appendChild(toB)
  element.appendChild(note)

  // 将json文件数据填充到页面
  var jP = document.createElement('div')
  var name = document.createElement('h2')
  name.innerHTML = jsonData.name
  jP.appendChild(name)
  jsonData.desc.map((val)=>{
    let p = document.createElement('p')
    p.innerHTML = val
    jP.appendChild(p)
  })
  element.appendChild(jP)

  return element
}

document.body.appendChild(component())