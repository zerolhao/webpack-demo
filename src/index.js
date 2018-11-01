import _ from 'lodash';
// 管理资源例子用到
import './style.css';
import IconHome from './icon-home.png';
import IconEye from './icon-eye.png';
import xmlData from './xml-data.xml';
import jsonData from './json-data.json';
// 管理输出例子用到
import printMe from './print.js'

function component() {
  let element = document.createElement('div')

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  let h1 = document.createElement('h1')
  h1.innerHTML = _.join(['Hello', 'webpack'], ' ')
  h1.classList.add('hello')

  element.appendChild(h1)

// 管理资源用例
  // 将图像添加到我们现有的 div
  let iconHome = new Image()
  iconHome.src = IconHome

  element.appendChild(iconHome)

  // 将xml文件数据填充到页面，正常应该不是我这么填充
  //console.log(xmlData)
  let note = document.createElement('div')
  let header = document.createElement('header')
  let con = document.createElement('div')
  let fromA = document.createElement('p')
  let toB = document.createElement('p')
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
  let jP = document.createElement('div')
  let name = document.createElement('h2')
  name.innerHTML = jsonData.name
  jP.appendChild(name)
  jsonData.desc.map((val)=>{
    let p = document.createElement('p')
    p.innerHTML = val
    jP.appendChild(p)
  })
  element.appendChild(jP)

// 管理输出用例
  let btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console!'
  btn.addEventListener('click',printMe)
  element.appendChild(btn)

  return element
}

document.body.appendChild(component())