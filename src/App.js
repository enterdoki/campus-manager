import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AllCampus from './components/allCampus'
import AllStudents from './components/allStudents'
import SingleCampus from './components/singleCampus';
import SingleStudent from "./components/singleStudent";

class App extends Component {
  render(){
    const allCampusComponent = () =>(<AllCampus/>);
    const allStudentsComponent = () =>(<AllStudents/>)
    const singleCampusComponent = (props) =>(<SingleCampus {...props}/>)
    const singleStudentComponent = (props) => (<SingleStudent {...props}/>)
    return (
      <Router>
          <Switch>
            <Route exact path="/" render={allCampusComponent}/>
            <Route exact path="/students" render={allStudentsComponent}/>
            <Route exact path="/campus/:id" render={singleCampusComponent}/>
            <Route exact path="/students/:id" render={singleStudentComponent}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
