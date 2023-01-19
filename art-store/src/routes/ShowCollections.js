import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from "react-bootstrap/Carousel";

function ShowCollections () {

    let {collectionName} = useParams();

    const [art, setArt] = useState([{
        artName: "",
        artist: "",
        price: "",
        year: "",
        image: "",
        collection: "",
        id: ""
          }])
    

    let carouselNumber = 0

    const thisCollection = art.filter(artt => (artt.collection === collectionName));
    console.log(thisCollection + ' this collection');

    // const setCarouselNumber = () => {
    //     if (carouselNumber < (thisCollection.length - 1)) {
    //         carouselNumber += 1;
    //     } else {
    //         carouselNumber = 0
    //     }
    // }

    const getArt = () => {
        axios
        .get('http://localhost:5245/api/art')
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
                        <img className="d-block w-100" src={collection.image} alt={collection.name}/>
                        <Carousel.Caption>
                            {collection.artName} by {collection.artist} <br/>
                            {collection.year}
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
            </Carousel>

        </div>
    )
}

export default ShowCollections;