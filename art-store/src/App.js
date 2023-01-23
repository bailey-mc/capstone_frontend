import React from 'react'
import {
BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ShowArt from './routes/ShowArt';
import ShowCollections from './routes/ShowCollections'
import Collections from './routes/Collections'
import Root from './routes/Root'
import Art from './routes/Art'
import NewArt from './routes/NewArt'
import EditArt from './routes/EditArt'
import About from './routes/About'
import ErrorPage from './routes/Error-page';


function App() {




  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Root/>}>
          <Route path="/art" element={<Art/>}/>
          <Route path="/art/:artId" element={<ShowArt/>}/>
          <Route path="/newArt" element={<NewArt/>}/>
          <Route path="/editArt/:id" element={<EditArt/>}/>
          <Route path="/collections" element={<Collections/>}/>
          <Route path="/collections/:collectionName" element={<ShowCollections/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
    </>
  )


}

export default App;
