import React, { Component } from 'react';

// Additional Redux store imports;
import { connect } from "react-redux";
import {fetchAllCampusThunk} from '../store/utilities/allCampus';

class allCampus extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount(){
    this.props.fetchAllCampus();
  }

  render() {
    return (
        <div>
          <p>hi</p>
        </div>
    )
  }
}

const mapState = (state) => {
  return {
    students :state.allCampus
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAllCampus: () => dispatch(fetchAllCampusThunk())
  }
}

export default connect(mapState, mapDispatch)(allCampus);