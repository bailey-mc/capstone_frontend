import { useEffect, useState } from 'react'
import axios from 'axios'

function Art() {

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

    return(
    <div className="App">
      {art.map((artPiece) => {
          return(
            <div key={artPiece.id}>
              <p>{artPiece.artName} by {artPiece.artist}</p>
              <a href={`./editArt/${artPiece.id}`}>edit</a>
            </div>
          )
        })
      }
    </div>
    )
}

export default Art;