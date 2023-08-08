import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Layout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
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
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
