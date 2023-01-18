import React, {useEffect, useState} from 'react'
import ReactDOM from "react-dom/client";
import {
BrowserRouter as Router, Route, Routes
} from "react-router-dom";
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Root from './routes/Root'
import ErrorPage from './routes/Error-page';
import Art from './routes/Art'
import NewArt from './routes/NewArt'
import EditArt from './routes/EditArt'

function App() {


  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Root />,
  //     errorElement: <ErrorPage />,
  //     children:[
  //       {
  //         path:"art",
  //         element:<Art/>
  //       },
  //       {
  //         path:"newArt",
  //         element:<NewArt/>
  //       }
  //     ]
  //   },
  // ]);

  
  // ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>
  // );

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Root/>}/>
        <Route path="/art" element={<Art/>}/>
        <Route path="/newArt" element={<NewArt/>}/>
        <Route path="/editArt/:id" element={<EditArt/>}/>
      </Routes>
    </Router>
    </>
  )


}

export default App;
