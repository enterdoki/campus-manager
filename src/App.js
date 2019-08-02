import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AllCampus from './components/allCampus'

class App extends Component {
  render(){
    const allCampusComponent = () =>(<AllCampus/>);
    return (
      <Router>
          <div>
            <Route exact path="/" render={allCampusComponent}/>
          </div>
        </Router>
    );
  }
}

export default App;
