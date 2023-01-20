
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'

function ShowArt() {

    let {artId} = useParams()

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
            .get(`http://localhost:5245/api/art/${artId}`)
            .then 
            (response => setArt(response.data))
            
        }

    useEffect(()=> {
        getArt()
    }, [])

    return(
        <div className="show-art">
            <h2 className="art-title">{art.artName}</h2>
            <sm>by {art.artist}</sm><br/>
            <img src={art.image} className="show-art-img"/>
            <p>Year: {art.year}</p>
            <p>Part of our {art.collection} collection</p>
            {/* LINK TO COLLECTION HERE */}
            <p> Selling for ${art.price}</p>
            <p><Link to={`../../editArt/${art.id}`} className="custom-link right">Edit?</Link></p>
        </div>
    )
}

export default ShowArt;