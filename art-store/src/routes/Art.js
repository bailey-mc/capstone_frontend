import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Art() {

  const [art, setArt] = useState([{
                                  artName: "",
                                  artist: "",
                                  price: "",
                                  year: "",
                                  image: "",
                                  collection: "",
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
      <h4>Part of our {art[x].collection} collection</h4>
      {/* link to collection here */}
      


      <div className='cards'>
        {art.map((artPiece) => {
            return(
                <>
              <Card style={{ width: '18rem', margin: '2rem'}} key={artPiece.id}>
                <Card.Img variant="top" src={artPiece.image} />
                <Card.Body>
                  <Card.Title>{artPiece.artName}</Card.Title>
                  <Card.Text>
                  <p>by {artPiece.artist}, {artPiece.year} </p>
                  $ {artPiece.price}<br/>
                  Part of our {artPiece.collection} collection
                  </Card.Text>
                  <Button variant="primary" href={`./editArt/${artPiece.id}`}>Edit</Button>
                </Card.Body>
              </Card>
              </>
            )
          })
        }
      </div>

    </div>
    )
}

export default Art;