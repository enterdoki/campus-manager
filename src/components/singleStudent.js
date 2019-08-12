import React, { Component } from "react";
import axios from "axios";
import "../styles/singleStudent.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Campusbox from "./campusBox";
import {
  changeCampus,
  removeStudentThunk
} from "../store/utilities/allStudents";
import { selectcampus } from "../store/utilities/targetCampus-reducer";
import { selectstudent } from "../store/utilities/targetStudent-reducer";
// import { delStudent } from "../reducers/stuReducer";

class Student extends Component {
  constructor() {
    super();
    this.state = {
      student: [],
      select: null,
      edit: false,
      first: "",
      last: "",
      gpa: NaN,
      url: "None",
      imgurl: "",
      deleted: false
    };
  }

  async componentDidMount() {
    try {
      let { data } = await axios.get(
        `https://campus-manager-api.herokuapp.com/students/${
          this.props.match.params.id
        }`
      );
      this.setState({
        student: data
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    this.setState({
      select: 111
    });
  }

  condition = () => {
    if (this.props.campus != null)
      //&{} 在这没用？？？？？？
      return `This Student is registered to ` + this.props.campus.campus;
    else return "This Student is not registered to a campus";
  };
  condition2 = () => {
    if (this.props.campus != null)
      //&{} 在这没用？？？？？？
      return (
        <button className="btn btn2" onClick={this.changeCampus}>
          Change Campus
        </button>
      );
    else
      return (
        <button className="btn btn2" onClick={this.changeCampus}>
          Register
        </button>
      );
  };

  dropChange = async ev => {
    // console.log(ev.target.value);
    let my = this.props.allcams.filter(ea => ea.campus === ev.target.value);
    await this.setState({ select: my[0] });
    // console.log(this.state.select);
  };

  changeCampus = () => {
    // if (this.state.student !== null)
    // console.log("change campus with: ", this.state.select);
    if (typeof this.state.select === "object" && !this.state.deleted) {
      this.props.changeCampus(this.props.student, this.state.select.campusId);
      this.props.selectcampus(this.state.select);
    }

    //
  };

  saveEdit = async () => {
    // console.log(this.state.first);
    // console.log(this.state.last);
    // console.log(this.state.gpa);
    // console.log(this.state.url);
    let gpa = parseFloat(this.state.gpa);
    if (this.state.first === "" || this.state.last === "") {
      alert("Student name CAN NOT be blank");
    } else if (isNaN(gpa) || gpa < 0 || gpa > 4) {
      alert("Please enter a valid GPA between 0 and 4.0");
    } else {
      //   console.log(parseFloat(this.state.gpa));
      console.log(this.state.student);
      this.state.student.firstName = this.state.first;
      this.state.student.lastName = this.state.last;
      this.state.student.gpa = parseFloat(this.state.gpa);
      this.state.student.url = this.state.url;
      //this.setState({ student: this.state.student });
      this.props.selectstudent(this.state.student);
      console.log(this.state.student);
      //这里发送

      setTimeout(() => {
        this.setState({
          edit: !this.state.edit,
          first: "",
          last: "",
          gpa: NaN,
          url: "None"
        });
      }, 110);
    }
  };

  editChange = async ev => {
    //为什么只能中括号？？？？？？？？
    await this.setState({ [ev.target.name]: ev.target.value });
  };

  delete = async () => {
    console.log(this.props.student);
    this.state.imgurl = this.props.student.imageUrl;
    this.state.deleted = true;
    await this.props.removeStudentThunk(this.props.student.id);
    await this.props.selectstudent(null);
    await this.props.selectcampus(null);
  };

  onedit = () => {
    if (this.state.edit === false) {
      return (
        <div className="editstu">
          <h2>
            {this.props.student.firstName + " " + this.props.student.lastName}
          </h2>
          {/* 怎么加空格 ！！*/}
          <h3>{"GPA:" + " " + this.props.student.gpa}</h3>
          <button className="btn stubtn" onClick={this.click1}>
            Edit
          </button>
          <button onClick={this.delete} className="btn stubtn">
            Delete
          </button>
        </div>
      );
    } else
      return (
        <div className="editstu">
          <div className="kkk">
            <label>First: </label>
            <input
              onChange={this.editChange}
              name="first"
              className="nameIn"
              type="text"
            />
            <label> Last: </label>
            <input
              onChange={this.editChange}
              name="last"
              className="nameIn"
              type="text"
            />
          </div>
          <div className="kkk">
            <label>GPA: </label>
            <input onChange={this.editChange} name="gpa" type="text" />
          </div>
          <div className="kkk">
            <label>Student URL: </label>
            <input onChange={this.editChange} name="url" type="text" />
          </div>
          <button className="btn btn3" onClick={this.saveEdit}>
            Save Changes
          </button>
          <button className="btn stubtn" onClick={this.click1}>
            Cancel
          </button>
          {/* <label>Student Url: </label>
          <input type="text" /> */}
        </div>
      );
  };

  click1 = () => {
    setTimeout(() => {
      this.setState({ edit: !this.state.edit });
    }, 90);
  };

  condition3 = () => {
    // console.log(this.props.student);
    // return (
    //   <div>
    //     <h1>{typeof this.props.student}</h1>
    //     <button className="btn stubtn" onClick={this.click1}>
    //       Edit
    //     </button>
    //     <button onClick={this.delete} className="btn stubtn">
    //       Delete
    //     </button>
    //   </div>
    // );
    if (this.props.student !== null) {
      return (
        <div className="stuInfo">
          <img className="xl" src={this.props.student.imageUrl} />
          {this.onedit()}
        </div>
      );
    } else {
      return (
        <div className="stuInfo">
          <img className="xl" src={this.state.imgurl} />
          <div className="editstu">
            <h2>This Student</h2>
            <h3>Is deleted</h3>
            <button className="btn stubtn">
              <Link to="/students">Return</Link>
            </button>
          </div>
        </div>
      );
    }
  };

  render() {
    const { student } = this.state;
    return (
      // <div className="container">
      //   <h1>{student.firstname + " " + student.lastname}</h1>
      //   <div className="img">
      //     <img src={student.image} />
      //   </div>
      //   <div className="description">
      //     <p>placeholder</p>
      //   </div>
      //   <div className="students">
      //     <p>school</p>
      //   </div>
      // </div>
      <div>
        <div className="title t1">
          <h1>Students</h1>
        </div>
        {this.condition3()}
        <h3>{this.condition()}</h3>
        {/* <h3>{this.props.campus.name}</h3> */}
        <div className="change">
          {this.props.campus != null && (
            <Campusbox campus={this.props.campus} />
          )}
          <div className="sbar">
            <select onChange={this.dropChange}>
              <option value="0">Select a Campus</option>
              {this.props.allcams.map(cam => {
                if (cam != this.props.campus)
                  return (
                    <option obj={cam} value={cam.campus}>
                      {cam.campus}
                    </option>
                  );
              })}
            </select>
            {this.condition2()}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    student: state.targetStu,
    campus: state.targetCam,
    allcams: state.allCampus
  };
};

const mapAction = {
  removeStudentThunk,
  changeCampus,
  selectcampus,
  selectstudent
};

export default connect(
  mapState,
  mapAction
)(Student);
