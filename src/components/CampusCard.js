import React, { useState } from 'react';
import '../styles/CampusCard.css';
import {Link} from 'react-router-dom';
import EditCampusPopUp from './EditCampusPopUp';

function CampusCard ({campus,deleteCampus,handleChange,handleSubmit}){
    const [clicked, setClicked] = useState(false);
    let handleEdit = () =>{
        setClicked(false);
        handleSubmit(campus.id);
    }
    return(
        <div className="Card">
            <div className="image">
                <img src={campus.imgUrl}></img>
            </div>
            <div className="bottom">
                <div className="top-left">
                    <Link to={`/campus/${campus.id}`}>
                        {campus.name}
                    </Link>
                </div>
                <div className="bottom-left">
                    <button onClick={() => setClicked(true)}>Edit</button>
                    {clicked? (<div>
                        <EditCampusPopUp
                        campus={campus}
                        close={() => setClicked(false)}
                        handleChange={handleChange}
                        submit={handleEdit}
                        />
                    </div>):(<div></div>)}
                </div>
                <div className="bottom-right">
                    <button onClick={()=>deleteCampus(campus.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CampusCard;