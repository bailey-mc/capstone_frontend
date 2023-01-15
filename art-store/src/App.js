import axios from 'axios'
import React, {useEffect, useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Root from './routes/Root'
import ErrorPage from './routes/Error-page';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,

    },
  ]);

  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );


  // return (

  //   <>
  //   <Router>
  //     <Routes>
  //       <Route path="/" index 
  //       element={<Index getArt={getArt} art={art} setArt={setArt}/>}
  //       errorElement= {<ErrorPage/>}
  //       />

  //     </Routes>
    
  //   </Router>
  //   </>


    // <div className="App">
    //   {art.map((artPiece) => {
    //       return(
    //         <div key={artPiece.id}>
    //           <p>{artPiece.artName} by {artPiece.artist}</p>
    //         </div>
    //       )
    //     })
    //   }
    // </div>
  // );
}

export default App;
