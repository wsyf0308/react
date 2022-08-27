import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../layout/index.jsx'
import Home from '../views/home.jsx'
import About from '../views/about.jsx'

export const routerConfig = [
  {
    path: '/',
    element: <Layout />,
    label: 'Home',
    title: 'Home',
    key: '/',
    children: [
      {
        path: '/test',
        element: <Home />,
        label: 'h',
        title: 'h',
        key: '/test'
      }
    ]
  },
  {
    path: '/about',
    element: <Layout />,
    label: 'About',
    title: 'About',
    key: '/about',
    children: [
      {
        path: '/about/test',
        element: <About />,
        label: 'test',
        title: 'test',
        key: '/about/test'
      }
    ]
  }
]

export const Router = () => {
  return useRoutes(routerConfig)
}
