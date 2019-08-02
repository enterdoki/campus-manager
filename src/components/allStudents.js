import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../components/allStudentsCard"
import { fetchStudentsThunk, removeStudentThunk, addStudentThunk } from "../store/utilities/allStudents";
// import "./allStudents.css";

class allStudents extends Component {

    componentDidMount() {
        this.props.fetchAllStudents();
    }

    removeStudent = (id) => {
        this.props.removeStudent(id);
    }

    addStudent = (student) => {
        this.props.addStudent(student);
    }

    display = () => {
        this.props.students.map(student => {
            return (
                <Card firstName={student.firstName}
                    lastName={student.lastName}
                    image={student.imageURL}
                    gpa={student.gpa}
                    />
            )
        })
    }

    render() {
        return (
            <Card students={this.props.students} removeStudent={this.props.removeStudent} addStudent={this.props.addStudent} />
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