// src index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// add the following code below this line

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 >Hello, Padawans!</h1>
      </div >
    )
  }
}

// add the following code below this line

ReactDOM.render(< App />, document.getElementById('root'));


// src/index.js

import 'h1' , { Hello } from 'react'; // Change this line
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component { // Change this line 
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));