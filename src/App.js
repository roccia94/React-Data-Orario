import React, { Component } from 'react';
import Clock from  './Clock'
 
class App extends Component {

  render() {
    return (
      <React.Fragment>
      <div className="App">
       <h1> Data e ora</h1>
      </div>
      <Clock secs="1" country="Italy" timezone="0" />
      <Clock  secs="5" country="qualche posto"  timezone="2" />
      </React.Fragment>
    );
  }
}

export default App;