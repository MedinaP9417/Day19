// src index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Only change code below this line
const World = "World";
// Only change code above this line

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 >Hello, {World}!</h1>
      </div >
    )
  }
}

// add the following code below this line

ReactDOM.render(< App />, document.getElementById('root'));