import React from 'react';
import '../styles/CampusCard.css';
import {Link} from 'react-router-dom';

function CampusCard ({image,campus,id,deleteCampus}){
    console.log(image)
    return(
        <div className="Card">
            <div className="image">
                <img src={image}></img>
            </div>
            <div className="bottom">
                <div className="top-left">
                    <Link to={`/campus/${id}`}>
                        {campus}
                    </Link>
                </div>
                <div className="bottom-left">
                    Edit
                </div>
                <div className="bottom-right">
                    <button onClick={()=>deleteCampus(id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CampusCard;