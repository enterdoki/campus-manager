import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popup from "./StudentPopup";
import { connect } from "react-redux";
import { selectstudent } from "../store/utilities/targetStudent-reducer";
import { selectcampus } from "../store/utilities/targetCampus-reducer";
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
    
  select = () => {
    this.props.selectstudent(this.props.student);
    // console.log(this.props.student);
    // console.log(this.props.campuses);
    let cams = this.props.campuses;
    console.log(cams, "heyheyhey");
    for (let i = 0; i < cams.length; i++) {
      console.log(this.props.student);
      if (cams[i].campusId == this.props.student.campusId) {
        console.log(cams[i]);
        this.props.selectcampus(cams[i]);
        return;
      }
    }   
    }
    render () {
        return(
            <div className="Card">
                <div className="image">
                    <Link to={`/campus/${this.props.campusId}`}>
                        <img src={this.props.image}></img>
                    </Link>
                </div>
                <div className="bottom">
                    <div className="top-left">
                        <Link to={`/students/${this.props.id}`} onClick={this.select}>
                            {this.props.firstName} {this.props.lastName}
                        </Link>
                        
                    </div>
                    <div className="bottom-left">
                        {this.props.editStudent ? (
                        <div>
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
                            )
                        : (null) }
                        </div>
                        ): (<div></div>)}

                        
                    </div>
                    <div className="bottom-right">
                        <button onClick={()=>this.props.removeStudent(this.props.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
    // this.props.selectcampus(null);

    // setTimeout(() => {
    //   console.log(this.props.tarcam);    ???????
    // }, 2000);
  };

 
const mapState = state => {
  return {
    campuses: state.allCampus
    // tarcam: state.targetCam
  };
};

const mapAction = {
  selectstudent,
  selectcampus
};

export default connect(
  mapState,
  mapAction
)(StudentsCard);
