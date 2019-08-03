import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AllCampus from './components/allCampus'
import AllStudents from './components/allStudents'
import SingleCampus from './components/singleCampus';

class App extends Component {
  render(){
    const allCampusComponent = () =>(<AllCampus/>);
    const allStudentsComponent = () =>(<AllStudents/>)
    const singleCampusComponent = () =>(<SingleCampus/>)
    return (
      <Router>
          <Switch>
            <Route exact path="/" render={allCampusComponent}/>
            <Route exact path="/students" render={allStudentsComponent}/>
            <Route exact path="/campus/:id" render={(props)=> <SingleCampus {...props}/>}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
