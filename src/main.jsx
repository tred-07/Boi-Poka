import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorElement from './Components/ErrorElement/ErrorElement.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import BookDetail from './Components/BookDetail/BookDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[{
      path:"/",
      element: <Home></Home>
    },{
      path:"dashboard",
      element: <Dashboard></Dashboard>
    },{
      path:'book/:bookId'
      ,element: <BookDetail></BookDetail>
    }]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
