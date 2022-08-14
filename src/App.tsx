import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
// import {Button} from 'antd';

const App = (): any => {
  // const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

export default App
