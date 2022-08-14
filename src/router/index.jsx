import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../layout/index.jsx'
// import Home from '../views/home.jsx'
// import About from '../views/about.jsx'

export const routerConfig = [
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/about',
    element: <Layout />
  }
]

export const Router = () => {
  return useRoutes(routerConfig)
}
