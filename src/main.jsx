import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PagPrincipal } from './Pag-Principal/PagPrincipal.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Detalles } from './Pag-Principal/Detalles.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PagPrincipal/>,
  },
  {
    path:"detalles/:id/:userId",
    element:<Detalles/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
