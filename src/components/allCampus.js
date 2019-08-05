import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PopUp from './PopUp';

// Additional Redux store imports;
import { connect } from "react-redux";
import {fetchAllCampusThunk, deleteCampusThunk, addCampusThunk} from '../store/utilities/allCampus';
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
        image={item.imageUrl}
        campus={item.campus}
        id={item.campusId}
        deleteCampus={this.props.deleteCampus}
        />
      )
    })
  )

  toggleEdit=()=>{
    this.setState({
      addCampus: !this.state.addCampus
    })
  }

  render() {
    return (
        <div> 
          <div className = "title"><h1>Campus Listing</h1></div>
          <Link to="/students"><button>Students</button></Link>
          <button onClick={this.toggleEdit}> Add Campus </button>
            {this.state.addCampus? 
            (<PopUp close={this.toggleEdit}/>)
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
    addCampus: () => dispatch(addCampusThunk())
  }
}

export default connect(mapState, mapDispatch)(allCampus);