
import { useState, useEffect } from "react";
import axios from "axios";

function Collections () {

    const [art, setArt] = useState([{
        artName: "",
        artist: "",
        price: "",
        year: "",
        image: "",
        collection: "",
          }])
    




    // const setCollections = () => {
    //     for (let i = 0; i < art.length; i++) {
    //         collections.push({"name": art[i].collection})
    //     }
    // }

    // let collections = [{}];

    const uniqueCollections = [...new Map(art.map(item => [item.collection, item])).values()]
   
    

    const getArt = () => {
        axios
        .get('http://localhost:5245/api/art')
        .then 
        (response => setArt(response.data))
        
        // setCollections();

    }

    useEffect(()=> {
        getArt()
    }, [])

    return (
        <div className="collections">
        
          and now for unique collections map <br/>
          {uniqueCollections.map((collection)=> {
            return(
                <>
                    {collection.collection} <br/>
                    <img src={collection.image} width="200px"/>
                </>
            )
          })}
        
           
            
        </div>
    )
}

export default Collections;