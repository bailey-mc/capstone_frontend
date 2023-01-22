
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

        setArt({
            ...art,
            [event.target.name]: event.target.value
        })
        console.log(art);

    }

    const handleEditArt = (event) => {
        event.preventDefault();
        axios
            .put(`http://localhost:5245/api/art/${parameters.id}`,
            {
                Name: art.Name,
                Artist: art.Artist,
                Price: art.Price,
                Year: art.Year,
                Image: art.Image,
                Collection: art.Collection
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <Form.Control type="text" name="Name" defaultValue={art.Name} onChange={handleChange} />
                </Form.Group>
                {/* <input type="text" name="Name" defaultValue={art.}Title" max-width="100px" onChange={handleChange}/> */}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Artist</Form.Label>
                    <Form.Control type="text" name="Artist" defaultValue={art.Artist} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" name="Year" defaultValue={art.Year} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="Price" defaultValue={art.Price} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="string" name="Image" defaultValue={art.Image} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Collection</Form.Label>
                    <Form.Select type="string" name="Collection" placeholder="Collection" max-width="100px" onChange={handleChange}>
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
                <Button variant="primary" className="delete" onClick={handleDelete}>Delete</Button>

                </Form>


        </div>
    )
}

export default EditArt;