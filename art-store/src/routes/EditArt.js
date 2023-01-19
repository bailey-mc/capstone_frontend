
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function EditArt() {


    const navigate = useNavigate();
    //pulls info from url
    const parameters = useParams();

    const [art, setArt] = useState({});


    const handleChange = (event) => {
        // event.preventDefault();
        console.log(event.target.value + ' value ' + event.target.name + " name");

        // const {name, value, type} = event.target
        setArt({
            ...art,
            [event.target.name]: event.target.value
        })
        console.log(art);

        // setName(event.target.value)
        // console.log(name);
    }

    const handleEditArt = (event) => {
        axios
            .put(`http://localhost:5245/api/art/${parameters.id}`,
            {
                artName: art.artName,
                artist: art.artist,
                price: art.price,
                year: art.year,
                image: art.image,
                collection: art.collection
            })
            //WHY DOES IT NOT RELOAD WHEN IT NAVIGATES TO ART SHOW PAGE???
            navigate(`/art/${parameters.id}`)
    }

    const handleDelete = () => {
        axios
            .delete(`http://localhost:5245/api/art/${parameters.id}`)
        navigate('/art')
        //THIS ALSO DOES NOT RELOAD PAGE WHEN IT NAVIGATES TO ART

      }
    
    const getArt = () => {
        axios
            .get(`http://localhost:5245/api/art/${parameters.id}`)
            .then((response) => setArt(response.data))
    }
        
    useEffect(()=> {
        getArt()
    }, [])

    return(
        <div className="frame">
            <div className="filler"></div>
        
        <Form
        className="form" 
        onSubmit={handleEditArt}
        >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Art Title</Form.Label>
                    <Form.Control type="text" name="artName" defaultValue={art.artName} onChange={handleChange} />
                </Form.Group>
                {/* <input type="text" name="artName" defaultValue={art.}Title" max-width="100px" onChange={handleChange}/> */}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Artist</Form.Label>
                    <Form.Control type="text" name="artist" defaultValue={art.artist} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" name="year" defaultValue={art.year} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" defaultValue={art.price} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="string" name="image" defaultValue={art.image} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Collection</Form.Label>
                    <Form.Select type="string" name="collection" placeholder="Collection" max-width="100px" onChange={handleChange}>
                        <option selected disabled hidden>Select a Collection</option>
                        <option>Awful Animals</option>
                        <option>Poor Traits</option>
                        <option>Bad Views</option>
                        <option>Abstract Aneurysms</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" 
                type="submit"
                >
                    Submit
                </Button>
                </Form>

        <button onClick={handleDelete}>Delete</button>

        </div>
    )
}

export default EditArt;