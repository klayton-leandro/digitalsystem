import {
  createBrowserRouter
} from "react-router-dom";


import {
  About,
  HomePage
} from "../pages"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

