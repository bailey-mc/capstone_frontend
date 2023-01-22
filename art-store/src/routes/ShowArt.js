
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'

function ShowArt() {

    let {artId} = useParams()

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
            .get(`http://localhost:5245/api/art/${artId}`)
            .then 
            (response => setArt(response.data))
            
        }

    useEffect(()=> {
        getArt()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className="show-art">
            <h2 className="art-title">{art.Name}</h2>
            <sm>by {art.Artist}</sm><br/>
            <img src={art.Image} className="show-art-img" alt={art.Name}/>
            <p>Year: {art.Year}</p>
            <p>Part of our {art.Collection} collection</p>
            {/* LINK TO Collection HERE */}
            <p> Selling for ${art.Price}</p>
            <p><Link to={`../../editArt/${art.Id}`} className="custom-link right">Edit?</Link></p>
        </div>
    )
}

export default ShowArt;