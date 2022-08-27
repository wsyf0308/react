import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

import { routerConfig } from '../../../router/index.jsx'

const { Sider } = Layout
export default function SideBar () {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const handleClick = () => {
    setCollapsed(!collapsed)
  }
  const jumpRouter = (item) => {
    console.log(item)
    navigate(item.key)
  }
  return (
    <>
      <Sider
        collapsible
        collapsed = {collapsed}
        trigger={null}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0
        }}
      >
          <div className="logo" onClick={handleClick}/>
           <Menu
               theme="dark"
               mode="inline"
               items={routerConfig}
               onClick={jumpRouter}
           />
      </Sider>
    </>
  )
}
