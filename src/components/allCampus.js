import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NewCampusPopUp from './NewCampusPopUp';

// Additional Redux store imports;
import { connect } from "react-redux";
import {fetchAllCampusThunk, deleteCampusThunk, addCampusThunk, editCampusThunk} from '../store/utilities/allCampus';
import CampusCard from './CampusCard';
import '../styles/allCampus.css'

class allCampus extends Component {
  constructor() {
    super();
    this.state = {
      addCampus: false
    }
  }

  componentDidMount(){
    this.props.fetchAllCampus();
  }

  display = () =>(
    this.props.allCampus.map(item=>{
      return (
        <CampusCard
        campus={item}
        deleteCampus={this.props.deleteCampus}
        handleChange={this.handleChange}
        handleSubmit={this.handleEdit}
        />
      )
    })
  )

  toggleEdit=()=>{
    this.setState({
      addCampus: !this.state.addCampus
    })
  }

  handleChange = name => ({ target }) =>{
    this.setState({ 
      [name]: target.value
    }); 
  }
  
  handleNew = (event) =>{
    event.preventDefault();
    const arr= {
      "id":parseInt(this.state.id),
      "name":this.state.name,
      "address":this.state.address,
      "description":this.state.description,
      "imgUrl": "https://www.fullstackacademy.com/images/fa-logo.png"
    }
    console.log(arr);
    this.props.addCampus(arr);
    this.toggleEdit();
  }  

  handleEdit = (id) =>{
    const arr={
        "id":id,
        "name":this.state.name,
        "address":this.state.address,
        "description":this.state.description,
        "imgUrl": "https://www.fullstackacademy.com/images/fa-logo.png"
    }
    this.props.editCampus(id,arr);
    console.log(arr);
  }  

  render() {
    return (
        <div> 
          <div className = "title"><h1>Campus Listing</h1></div>
          <Link to="/students"><button>Students</button></Link>
          <button onClick={this.toggleEdit}> Add Campus </button>
            {this.state.addCampus? 
              (<NewCampusPopUp 
                close={this.toggleEdit}
                submit={this.handleNew}
                handleChange={this.handleChange}
              />)
            :(<div></div>)}
          <div className="wrap">
            <div className="display">
              {this.display()}
            </div>
          </div>
        </div>
    )
  }
}

const mapState = (state) => {
  return {
    allCampus :state.allCampus
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAllCampus: () => dispatch(fetchAllCampusThunk()),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    addCampus: (arr) => dispatch(addCampusThunk(arr)),
    editCampus: (id,arr) => dispatch(editCampusThunk(id,arr))
  }
}

export default connect(mapState, mapDispatch)(allCampus);