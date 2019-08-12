import React, { Component } from 'react';
import axios from 'axios';
import StudentsCard from "./allStudentsCard"
import { connect } from 'react-redux';
import {removeStudentThunk} from "../store/utilities/allStudents";
import '../styles/singleCampus.css'

class SingleCampus extends Component {
  constructor() {
    super();
    this.state = {
      campus: [],
      students: []
    }
  }
  async componentDidMount() {
    this.fetchSingleCampus();
  }

  async fetchSingleCampus() {
    try {
      let { data } = await axios.get(`https://campus-manager-api.herokuapp.com/campuses/${this.props.match.params.id}/students`)
      this.setState({
        campus: data,
        students: data.students
      })
      console.log(data.students)
    }
    catch(err) {
      console.log(err);
    }
  }

  removeStudent = async(id) => {
    await this.props.removeStudent(id);
    this.fetchSingleCampus();
}

  display = () =>(
    this.state.students.map(item=>{
      return (
        <StudentsCard
        image={item.image}
        firstName={item.firstname}
        lastName={item.lastname}
        email = {item.email}
        gpa = {item.gpa}
        id = {item.id}
        removeStudent={this.removeStudent}
        />
      )
    })
  )

  render() {
    const { campus } = this.state;

    return (
      <div className="container">
        <h1>{campus.name}</h1>
        <div className="img">
          <img src={campus.image}></img>
        </div>
        <div className="description">
          <p>{campus.description}</p>
        </div>
        <div className="students">
          <h2>Students</h2>
          <p>{this.display()}</p>
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
      removeStudent: (id) => dispatch(removeStudentThunk(id))
  }
}

export default connect(mapState, mapDispatch)(SingleCampus);