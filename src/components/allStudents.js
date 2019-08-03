import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    render() {
        return (
            <div className = "main">
                <div className = "title"><h1>List of Students</h1></div>
                <div className = "card">
                    <StudentsCard students={this.props.students} removeStudent={this.removeStudent} addStudent={this.addStudent} />
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

export default connect(mapState, mapDispatch)(allStudents);