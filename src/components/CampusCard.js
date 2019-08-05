import React, { useState } from 'react';
import '../styles/CampusCard.css';
import {Link} from 'react-router-dom';
import PopUp from './PopUp';

function CampusCard ({image,campus,id,deleteCampus}){
    const [clicked, setClicked] = useState(false);
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
                    <button onClick={() => setClicked(true)}>Edit</button>
                    {clicked? (<div>
                        <PopUp
                        close={() => setClicked(false)}
                        campus={campus} 
                        />
                    </div>):(<div></div>)}
                </div>
                <div className="bottom-right">
                    <button onClick={()=>deleteCampus(id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CampusCard;