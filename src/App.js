import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routes from "./Component/Routes/Routes";

import './app.css'
import NavBar from './Component/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
