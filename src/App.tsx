import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
// @ts-ignore
import Router from './router/index'
console.log(Router)
function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <h1>Welcome to React Router!</h1>
          <Router />
      </BrowserRouter>
  )
}

export default App
