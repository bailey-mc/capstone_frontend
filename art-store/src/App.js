import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [art, setArt] = useState([{
                                "artName": "",
                                "artist": "",
                                "id": "",
                                "price": "",
                                "year": ""
  }])

  const getArt = () => {
    axios
      .get('http://localhost:5245/api/art')
      .then 
      (response => setArt(response.data))
      console.log(art );

  }

  useEffect(()=> {
    getArt()
  }, [])
  return (
    <div className="App">
      {art.map((artPiece) => {
          return(
            <div key={artPiece.id}>
              {artPiece.artName} by
              {artPiece.artist}
            </div>
          )
        })
      }
      hewwo
    </div>
  );
}

export default App;
