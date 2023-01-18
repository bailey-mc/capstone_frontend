
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditArt(params) {


    
  const [art, setArt] = useState({})

    
    //pulls info from url
    const parameters = useParams();
    
    const getArt = () => {
        axios
            .get(`http://localhost:5245/api/art/${parameters.id}`)
            .then((response) => setArt(response.data))

    }
        
    useEffect(()=> {
        getArt()
    }, [])

    return(
        <>
        hewoooo
        {parameters.id}<br/>
        {art.artName}

        </>
    )
}

export default EditArt;