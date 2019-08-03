import React, {Component} from 'react';

class Student extends Component {
    render () {
        console.log(this.props.match.params.id);
        return (
            <div><h1>STUDENT: </h1></div>
        );
    }
}

export default Student;