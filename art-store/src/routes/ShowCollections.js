import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from "react-bootstrap/Carousel";

function ShowCollections () {

    let {collectionName} = useParams();

    const [art, setArt] = useState([{
        Name: "",
        Artist: "",
        Price: "",
        Year: "",
        Image: "",
        Collection: "",
        Id: ""
          }])
    


    const thisCollection = art.filter(artt => (artt.Collection === collectionName));
    console.log(thisCollection + ' this collection');


    const getArt = () => {
        axios
        .get('https://dotnetheadache.herokuapp.com/api/art')
        .then 
        (response => setArt(response.data))
        
    }

    useEffect(()=> {
        getArt()
    }, [])

    return(
        <div className="show-collections">
             <h2 className="collection-title">{collectionName}</h2>
            <Carousel className="carousel">
            {thisCollection.map((collection)=> {
                return(
                    <Carousel.Item>
                        <img className="d-block w-100 carousel-img" src={collection.Image} alt={collection.Name}/>
                        <Carousel.Caption>
                            {collection.Name} by {collection.Artist} <br/>
                            {collection.Year} <br/>
                            ${collection.Price}
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
            </Carousel>

        </div>
    )
}

export default ShowCollections;