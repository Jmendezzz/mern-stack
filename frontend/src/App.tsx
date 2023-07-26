import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {
  Layout,
  Landing,
  Register,
  Login,
  Dashboard,
  Error,
} from './assets/pages'
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
        path: '/register',
        element: <Register />
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
  }
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App
