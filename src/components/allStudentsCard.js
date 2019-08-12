import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Popup from "./StudentPopup";
import "../styles/allStudentsCard.css"

class StudentsCard extends Component { 
    constructor(props){  
        super(props);  
        this.state = { 
            showPopup: false 
        };  
    }  

    handlePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render () {
        return(
            <div className="Card">
                <div className="image">
                    <Link to={`/campus/${this.props.campusId}`}>
                        <img src={this.props.image}></img>
                    </Link>
                </div>
                <div className="bottom-left">
                    Edit
                </div>
                <div className="bottom">
                    <div className="top-left">
                        <Link to={`/students/${this.props.id}`}>
                            {this.props.firstName} {this.props.lastName}
                        </Link>
                        
                    </div>
                    <div className="bottom-left">
                        <button onClick={this.handlePopup}>Edit</button>  
                        {this.state.showPopup ? (
                            <Popup 
                            firstName = {this.props.firstName} 
                            lastName = {this.props.lastName}  
                            closePopup={this.handlePopup} 
                            campuses={this.props.campuses}
                            editStudent={this.props.editStudent}
                            id={this.props.id}
                            />
                        ): (null) }
                        
                    </div>
                    <div className="bottom-right">
                        <button onClick={()=>this.props.removeStudent(this.props.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default StudentsCard;