import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Layout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  Stats,
  Admin,
  Profile,
  AllJobs
} from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children:[
      {
        path:'all-jobs',
        element: <AllJobs />
      },
      {
        path:'stats',
        element:<Stats />
      },
      {
        path:'profile',
        element:<Profile />
      },
      {
        path:'admin',
        element:<Admin />
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
