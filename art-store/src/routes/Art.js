import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Art() {

  const [art, setArt] = useState([{
                                  artName: "",
                                  artist: "",
                                  price: "",
                                  year: "",
                                  image: "",
                                  collection: "",
                                  id: ""
                                    }])

  const getArt = () => {
    axios
      .get('http://localhost:5245/api/art')
      .then 
      (response => setArt(response.data))
      console.log(art );
  }

 let x = Math.floor(Math.random() * (art.length -1))

useEffect(()=> {
getArt()
}, [])

    return(
    <div className="App featured">
      <h2>Featured Art</h2><br/>
      <h4>{art[x].artName} by {art[x].artist}</h4>
      <img src={art[x].image} /><br/>
      <h4>Part of our <Link to={`/collections/${art[x].collection}`} className="custom-link" >{art[x].collection} collection</Link></h4>
      {/* link to collection here */}
      <hr/>
    

      <div className='cards'>
        {art.map((artPiece) => {
            return(
                <div className="one-card">
                <img className="cards-img" src={artPiece.image}/><br/>
                <p><Link to={artPiece.id}className="custom-link">{artPiece.artName} </Link></p>

         
              </div>
            )
          })
        }
      </div>

    </div>
    )
}

export default Art;