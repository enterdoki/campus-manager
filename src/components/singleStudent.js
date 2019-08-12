import React, {Component} from 'react';
import axios from 'axios';
import '../styles/singleStudent.css'

class Student extends Component {
    constructor() {
        super();
        this.state = {
            student:[]
        }
    }

    async componentDidMount () {
        try{
          let {data} = await axios.get(`https://campus-manager-api.herokuapp.com/students/${this.props.match.params.id}`)
          this.setState({
            student:data
          })
          console.log(data)
        }
        catch(err){
          console.log(err);
        }
      }
      
    render() {
      const {student} = this.state;
      return (
          <div className="container">
              <h1>{student.firstname + " " + student.lastname}</h1>
              <div className="img">
                <img src={student.image}></img>
              </div>
              <div className="description">
                <p>placeholder</p>
              </div>
              <div className="students">
                <p>school</p>
              </div>
          </div>
      );
    }
}

export default Student;