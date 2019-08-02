import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AllCampus from './components/allCampus'
import AllStudents from './components/allStudents'

class App extends Component {
  render(){
    const allCampusComponent = () =>(<AllCampus/>);
    const allStudentsComponent = () =>(<AllStudents/>)
    return (
      <Router>
          <div>
            <Route exact path="/" render={allCampusComponent}/>
            <Route exact path="/students" render={allStudentsComponent}/>
          </div>
        </Router>
    );
  }
}

export default App;
