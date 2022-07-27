import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState} from 'react'
import './App.css'
import {BrowserRouter} from "react-router-dom";
// @ts-ignore
import Router from './router/index'
import {Button} from 'antd';

function App() {
  const [count, setCount] = useState(0)
  const Arr = [
    {
      name: '一级菜单',
      children: [
        {name: '二级菜单'},
        {name: '二级菜单'},
        {
          name: '二级菜单',
          children: [
            {name: '三级菜单'},
            {name: '三级菜单'},
            {name: '三级菜单'},
            {
              name: '四级菜单',
              children: [
                {name: '五级菜单'},
                {name: '五级菜单'},
                {name: '五级菜单'},
              ]
            }
          ]
        }
      ]
    }
  ]
  const ItemLi = (item:any) => {
    return (<li>
      {item.name}
      {item.children ? ulMenu(item.children) : null}
    </li>)
  }
  const ulMenu = (arr: any) => {
    return (<ul>
      {arr.map((item: any) => {
         return ItemLi(item)
      })}
    </ul>)
  }
  return (
    <BrowserRouter>
      <h1>Welcome to Router!</h1>
      {ulMenu(Arr)}
      <Button type="primary">Button</Button>
      <Router/>
    </BrowserRouter>
  )
}

export default App
