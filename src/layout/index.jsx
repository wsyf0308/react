import React from 'react'
import Header from './components/navBar'
import SideBar from './components/sideBar'
import Content from './components/content'
import { Layout } from 'antd'
export default function Layouts () {
  return (
    <>
      <Layout>
        <SideBar></SideBar>
        <Layout style={{ marginLeft: 200 }}>
          <Header></Header>
          <Content></Content>
        </Layout>
      </Layout>
    </>
  )
}
