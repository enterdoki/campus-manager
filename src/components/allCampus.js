import React, { Component } from 'react';

// Additional Redux store imports;
import { connect } from "react-redux";
import {fetchAllCampusThunk, deleteCampusThunk} from '../store/utilities/allCampus';
import CampusCard from './CampusCard';
import '../styles/allCampus.css'

class allCampus extends Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    return (
        <div>
            <h1>Campus Listing</h1>
          <div className="display">
            {this.display()}
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
    deleteCampus: (id) => dispatch(deleteCampusThunk(id))
  }
}

export default connect(mapState, mapDispatch)(allCampus);