import * as React from "react";
import {
  createBrowserRouter,
  Link,
} from "react-router-dom";  

import {
  Home
} from "pages"

export const applicationRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);