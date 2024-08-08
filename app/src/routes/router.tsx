import * as React from "react";
import {
  createBrowserRouter,
  Link,
} from "react-router-dom";  

import {
  Home
} from "pages"
import { ApplicationProvider } from "contexts";

export const applicationRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <ApplicationProvider>
        <Home />
      </ApplicationProvider>
      
      </>
    )
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);