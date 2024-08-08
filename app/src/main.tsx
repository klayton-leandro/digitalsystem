import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { applicationRouter } from "./routes";


import './input.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={applicationRouter} />
  </StrictMode>,
)

