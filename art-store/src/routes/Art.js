import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Art() {

  const [art, setArt] = useState([{
                                  Name: "",
                                  Artist: "",
                                  Price: "",
                                  Year: "",
                                  Image: "",
                                  Collection: "",
                                  Id: ""
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
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

    return(
    <div className="App featured">
      <h2>Featured Art</h2><br/>
      <h4>{art[x].Name} by {art[x].Artist}</h4>
      <img src={art[x].Image} alt={art[x].Name}/><br/>
      <h4>Part of our <Link to={`/collections/${art[x].Collection}`} className="custom-link" >{art[x].Collection} collection</Link></h4>
      {/* link to collection here */}
      <hr/>
    

      <div className='cards'>
        {art.map((artPiece) => {
            return(
                <div className="one-card">
                <img className="cards-img" src={artPiece.Image} alt={artPiece.Name}/><br/>
                <p><Link to={artPiece.Id}className="custom-link">{artPiece.Name} </Link></p>

         
              </div>
            )
          })
        }
      </div>

    </div>
    )
}

export default Art;