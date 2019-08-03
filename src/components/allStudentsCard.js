import React from "react";
import {Link} from 'react-router-dom';
import "../styles/allStudentsCard.css"


function StudentsCard ({image,firstName, lastName, id,removeStudent}){
    console.log(image)
    return(
        <div className="Card">
            <div className="image">
                <img src={image}></img>
            </div>
            <div className="bottom">
                <div className="top-left">
                    <Link to={`/students/${id}`}>
                        {firstName} {lastName}
                    </Link>
                    
                </div>
                <div className="bottom-left">
                    Edit
                </div>
                <div className="bottom-right">
                    <button onClick={()=>removeStudent(id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default StudentsCard;