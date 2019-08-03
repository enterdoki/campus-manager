import React, {Component} from 'react';

class SingleCampus extends Component {
    // componentDidMount () {
    //     const { handle } = this.props.match.params
    //     const { campus } = this.props.location.state
    //     console.log(handle)
    // }
  render() {
    console.log(this.props.match.params.id);
    return (
        <div>
            <h1>campus</h1>
        </div>
    );
  }
}

export default SingleCampus;