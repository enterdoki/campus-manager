import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import StudentsCard from "../components/allStudentsCard"
import { fetchStudentsThunk, removeStudentThunk, addStudentThunk } from "../store/utilities/allStudents";
import '../styles/allStudents.css'


class allStudents extends Component {
    constructor() {
        super();
        this.state = {
            
        }
      }

    componentDidMount() {
        this.props.fetchAllStudents();
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
            image={item.imageUrl}
            firstName={item.firstName}
            lastName={item.lastName}
            id={item.id}
            campusId = {item.campusId}
            removeStudent={this.props.removeStudent}
            
            />
          )
        })
      )

    render() {
        return (
            <div className = "main">
                <div className = "title"><h1>Students</h1></div>
                <Link to="/"><button>Campuses</button></Link>
                <button onClick = {() => this.addStudent(studentToAdd)}>Add Student</button>
                <div className = "card">
                    {this.display()}
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        students: state.allStudents
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchAllStudents: () => dispatch(fetchStudentsThunk()),
        removeStudent: (id) => dispatch(removeStudentThunk(id)),
        addStudent: (student) => dispatch(addStudentThunk(student))
    }
}

const studentToAdd = {
    "id": 2,
    "firstName": "bob",
    "lastName": "jones",
    "email": "bobbyboy1234@yahoo.com",
    "imageUrl": "https://i.imgur.com/GuAB8OE.jpg",
    "gpa": 3.7,
    "createdAt": "2018-12-05T23:02:45.270Z",
    "updatedAt": "2019-06-14T00:15:35.429Z",
    "campusId": 1
}

export default connect(mapState, mapDispatch)(allStudents);