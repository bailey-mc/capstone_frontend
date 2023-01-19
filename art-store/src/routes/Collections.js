
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

function Collections () {

    const [art, setArt] = useState([{
        artName: "",
        artist: "",
        price: "",
        year: "",
        image: "",
        collection: "",
        id: ""
          }])
    

    const uniqueCollections = [...new Map(art.map(item => [item.collection, item])).values()]
   
    

    const getArt = () => {
        axios
        .get('http://localhost:5245/api/art')
        .then 
        (response => setArt(response.data))
        
    }

    useEffect(()=> {
        getArt()
    }, [])

    return (
        <div className="collections">

          {uniqueCollections.map((collection)=> {
            return(
                <div className="collection-card" key={collection.id}>
                    <h3><Link to={collection.collection} className="custom-link">{collection.collection}</Link></h3> <br/>
                    <img src={collection.image} width="200px"/>
                </div>
            )
          })}
        
           
            
        </div>
    )
}

export default Collections;