import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import StudentsCard from "../components/allStudentsCard"
import NewCampusPopUp from './NewStudentPopUp'
import { fetchAllStudentsThunk, removeStudentThunk, addStudentThunk, editStudentThunk } from "../store/utilities/allStudents";
import {fetchAllCampusThunk} from '../store/utilities/allCampus';
import '../styles/allStudents.css'


class allStudents extends Component {
    constructor() {
        super();
        this.state = {
            addStudent: false
        }
      }

    componentDidMount() {
        this.props.fetchAllStudents();
        this.props.fetchAllCampus();
    }

    removeStudent = (id) => {
        this.props.removeStudent(id);
    }

    addStudent = (student) => {
        this.props.addStudent(student);
    }

    display = () =>(
        this.props.students.map(item=>{
          return (
            <StudentsCard
            image={item.image}
            firstName={item.firstname}
            lastName={item.lastname}
            id={item.id}
            campusId = {item.campusid}
            removeStudent={this.props.removeStudent}
            campuses={this.props.campuses}
            editStudent={this.props.editStudent}
            />
          )
        })
      )

      handleChange = name => ({ target }) =>{
        this.setState({ 
          [name]: target.value
        }); 
      }
      
      handleNew = (id) =>{
        const arr= {
          "firstname":this.state.firstName,
          "lastname":this.state.lastName,
          "gpa": parseInt(this.state.gpa),
          "email":this.state.email,
          "image": "http://i.imgur.com/AItCxSs.jpg",
          "campusId": id
        }
        console.log(arr);
        this.props.addStudent(arr);
        this.toggleEdit();
      }  

      toggleEdit=()=>{
        this.setState({
          addStudent: !this.state.addStudent
        })
      }

    render() {
        return (
            <div className = "main">
                <div className = "title"><h1>Students</h1></div>
                <Link to="/"><button>Campuses</button></Link>
                <button onClick={this.toggleEdit}> Add Student </button>
                {this.state.addStudent? 
                (<NewCampusPopUp 
                    close={this.toggleEdit}
                    submit={this.handleNew}
                    handleChange={this.handleChange}
                    campuses={this.props.campuses}
                />)
                :(<div></div>)}
                <div className = "card">
                    {this.display()}
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        students: state.allStudents,
        campuses: state.allCampus
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        removeStudent: (id) => dispatch(removeStudentThunk(id)),
        addStudent: (student) => dispatch(addStudentThunk(student)),
        fetchAllCampus: () => dispatch(fetchAllCampusThunk()),
        editStudent: (id,arr) => dispatch(editStudentThunk(id,arr))
    }
}

export default connect(mapState, mapDispatch)(allStudents);