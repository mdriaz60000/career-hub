import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AplyedJobs from './Components/Aplyedjobs/AplyedJobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';


const myrouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/aplyed',
        element:<AplyedJobs></AplyedJobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={myrouter} />
  </React.StrictMode>,
)
