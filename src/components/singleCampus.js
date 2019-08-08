import React, {Component} from 'react';
import axios from 'axios';
import '../styles/singleCampus.css'

class SingleCampus extends Component {
  constructor() {
    super();
    this.state = {
      campus:[]
    }
  }
    async componentDidMount () {
      try{
        let {data} = await axios.get(`https://campus-manager-api.herokuapp.com/campuses/${this.props.match.params.id}`)
        this.setState({
          campus:data
        })
        console.log(data)
      }
      catch(err){
        console.log(err);
      }
    }
  render() {
    const {campus} = this.state;
    return (
        <div className="container">
            <h1>{campus.name}</h1>
            <div className="img">
              <img src={campus.imgUrl}></img>
            </div>
            <div className="description">
              <p>{campus.description}</p>
            </div>
            <div className="students">
              <p>students</p>
            </div>
        </div>
    );
  }
}

export default SingleCampus;