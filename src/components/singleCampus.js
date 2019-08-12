import React, { Component } from 'react';
import axios from 'axios';
import StudentsCard from "./allStudentsCard"
import '../styles/singleCampus.css'

class SingleCampus extends Component {
  constructor() {
    super();
    this.state = {
      campus: []
    }
  }
  async componentDidMount() {
    this.fetchSingleCampus();
  }

  async fetchSingleCampus() {
    try {
      let { data } = await axios.get(`https://campus-manager-api.herokuapp.com/campuses/${this.props.match.params.id}/students`)
      this.setState({
        campus: data
      })
      console.log(data.students)
    }
    catch(err) {
      console.log(err);
    }
  }

  // display = () =>(
  //   this.state.campus.students.map(item=>{
  //     return (
  //       <StudentsCard
  //       image={item.image}
  //       firstName={item.firstname}
  //       lastName={item.lastname}
  //       removeStudent={this.props.removeStudent}
  //       />
  //     )
  //   })
  // )

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
          {/* <p>{this.display()}</p> */}
        </div>
      </div>
    );
  }
}

export default SingleCampus;