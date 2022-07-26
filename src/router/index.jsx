import { useRoutes } from "react-router-dom";
import Home from '../views/home.jsx'
import About from '../views/about.jsx'

export const routerConfig = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    }
]

const Router = () => {
    return useRoutes(routerConfig)
}

export default Router
