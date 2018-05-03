import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routes from "./Component/Routes/Routes";

import AnnouncementInList from './Component/AnnouncementsListDisplay/AnnouncementsListDisplay'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes />
          <Link to="/LogIn">
            <button> LogIn </button>
          </Link>

          <Link to="/SignUp">
            <button> SignUp </button>
          </Link>

          <Link to="/announcements">
            <button> Annonces </button>
          </Link>

        </div>
      </Router>
    );
  }
}

export default App;
