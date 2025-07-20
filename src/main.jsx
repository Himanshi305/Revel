
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'

import Character from "./pages/Character";
import Phases from "./pages/Phases";

// Optional: create a simple error page or remove `errorElement` for now
const ErrorPage = () => <h2>404 - Page Not Found</h2>;
const router = createBrowserRouter([
  
  { path: '/', element: <App />},
  { path: "/character", element: <Character /> },
  { path: "/phases", element: <Phases />  }, //this

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)








































//krish was also herelol