import React, { useState } from 'react'
import { Layout } from 'antd'

const { Sider } = Layout
export default function SideBar () {
  const [collapsed, setCollapsed] = useState(false)
  const handleClick = () => {
    setCollapsed(!collapsed)
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
          {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} /> */}
      </Sider>
    </>
  )
}
