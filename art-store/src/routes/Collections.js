
import { useState, useEffect } from "react";
import axios from "axios";

function Collections () {
    const [collectionsArray, setCollectionsArray] = useState([{name: ""}])
    // const collections = [{name: "Awful Animals"}, {name:"Poor Traits"}, {name: "Bad Views"}, {name: "Abstract Aneurysms"} ]
    let collections = []
    let uniqueCollections = [];

  

    const setUniqueCollections = () => {
        collections.forEach((c)=> {
            if (!uniqueCollections.includes(c)) {
                uniqueCollections.push(c)
            }
        })
        console.log(uniqueCollections + " unique collections");
        setCollectionsArray(uniqueCollections)
    }
   

    const [art, setArt] = useState([{
        artName: "",
        artist: "",
        price: "",
        year: "",
        image: "",
        collection: "",
          }])


    const setCollections = () => {
        for (let i = 0; i < art.length; i++) {
            collections.push(art[i].collection)
            console.log(art[i].collection);
        }
        console.log(collections + " logging collections");

        setUniqueCollections();
    }
   

    const getArt = () => {
        axios
        .get('http://localhost:5245/api/art')
        .then 
        (response => setArt(response.data))
        .then(()=> setCollections())
        // setCollections();

    }

    useEffect(()=> {
        getArt()
        // setCollections()
    }, [])

    return (
        <div className="collections">
            {collectionsArray.map((collection)=> {
                return (
                    <div className="collection-card">
                        {collection} <br/>
                    </div>
                )
            })}
            test
            
        </div>
    )
}

export default Collections;