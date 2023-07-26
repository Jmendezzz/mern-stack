import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {
  Home,
  Landing,
  Register,
  Login,
  Dashboard,
  Error,
} from './assets/pages'
const router =  createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  }
]); 

function App() {

  return <RouterProvider  router={router} />;
}

export default App
