import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewArt() {
    const [newArt, setNewArt] = useState({
                                    artName: "",
                                    artist: "",
                                    price: "",
                                    year: "",
                                    image: "",
                                    collection: "",
                                })
    //test
    // const [name, setName] = useState("")

    const handleChange = (event) => {
        // event.preventDefault();
        console.log(event.target.value + ' value ' + event.target.name + " name");

        // const {name, value, type} = event.target
        setNewArt({
            ...newArt,
            [event.target.name]: event.target.value
        })
        console.log(newArt);

        // setName(event.target.value)
        // console.log(name);
    }

    const handleNewArt = (event) => {
        console.log(event.target + " post event");
        console.log(newArt.artName + " post + new art name " + newArt.artist + " artist");
        event.preventDefault();
        event.target.reset();
        axios
            .post('http://localhost:5245/api/art', {
                artName: newArt.artName,
                artist: newArt.artist,
                price: newArt.price,
                year: newArt.year,
                image: newArt.image,
                collection: newArt.collection
                // artName: "art name",
                // artist: "artist",
                // price: "45",
                // year: "32"
            })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
   

    return(
        <div className="frame">
            <div className="filler"></div>
            <Form 
            className="form"
            onSubmit={handleNewArt}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Art Title</Form.Label>
                    <Form.Control type="text" name="artName" placeholder="Title" max-width="40%"  onChange={handleChange} />
                </Form.Group>
                {/* <input type="text" name="artName" placeholder="Title" max-width="100px" onChange={handleChange}/> */}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Artist</Form.Label>
                    <Form.Control type="text" name="artist" placeholder="Artist" max-width="100px" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" name="year" placeholder="Year" max-width="100px" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" placeholder="Price" max-width="100px" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="string" name="image" placeholder="Image" max-width="100px" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Collection</Form.Label>
                    <Form.Control type="string" name="collection" placeholder="Collection" max-width="100px" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" 
                type="submit"
                // onClick={handleNewArt}
                >
                    Submit
                </Button>
                </Form>
        </div>
    )
}

export default NewArt;