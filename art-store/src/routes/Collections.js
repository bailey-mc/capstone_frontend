
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

function Collections () {

    const [art, setArt] = useState([{
        Name: "",
        Artist: "",
        Price: "",
        Year: "",
        Image: "",
        Collection: "",
        Id: ""
          }])
    

    const uniqueCollections = [...new Map(art.map(item => [item.Collection, item])).values()]
   
    

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
                <div className="collection-card" key={collection.Id}>
                    <h3><Link to={collection.Collection} className="custom-link">{collection.Collection}</Link></h3> <br/>
                    <img src={collection.Image} width="200px"/>
                </div>
            )
          })}
        
           
            
        </div>
    )
}

export default Collections;