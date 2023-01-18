import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';


// import Root from './routes/Root'
// import ErrorPage from './routes/Error-page';
// import Art from './routes/Art'
// import NewArt from './routes/NewArt'
// import EditArt from './routes/EditArt'

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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
