import { useParams } from "react-router-dom";

function ShowCollections () {

    let {collectionName} = useParams();

    return(
        <div className="show-collections">
            <h2>{collectionName}</h2>
        </div>
    )
}

export default ShowCollections;