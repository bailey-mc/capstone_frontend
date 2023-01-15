import React, {useEffect, useState} from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

import Root from './routes/Root'
import ErrorPage from './routes/Error-page';
import Art from './routes/Art'
import NewArt from './routes/NewArt'

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children:[
        {
          path:"art",
          element:<Art/>
        },
        {
          path:"newArt",
          element:<NewArt/>
        }
      ]
    },
  ]);

  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );


}

export default App;
