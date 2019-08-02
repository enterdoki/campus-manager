import React from 'react';
import '../styles/CampusCard.css';

function CampusCard ({image,campus}){
    console.log(image)
    return(
        <div className="Card">
            <div className="top">
                <img src={image}></img>
                {campus}
            </div>
            <div className="bottom">
                <div className="left">
                    Edit
                </div>
                <div className="right">
                    Delete
                </div>
            </div>
        </div>
    )
}

export default CampusCard;