'use strict'
//const logo = require('./logo.svg');
//common module 

import logo from './logo.svg';
import './App.css';
// es6 module 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello React!!

         HMR : 자동으로 ui를 갱신해주는 시스템
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
//module.exports = App;
