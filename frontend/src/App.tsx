import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {
  Layout,
  Landing,
  Register,
  Login,
  Dashboard,
  Error,
} from './pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        index:true,
        element: <Landing/>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }

    ]
  },
  
  {
    path: '/register',
    element: <Register />
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App
