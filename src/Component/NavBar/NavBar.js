import React from "react";
import { Link } from "react-router-dom";

import "./navBar.css";

class NavBar extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          isMenuDipslayed : false
      }
  }  

  toggleIsMenuDiplayedValue = () => {
      this.setState({
          isMenuDipslayed : !this.state.isMenuDipslayed
      })
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-large-size">
          <div className="left-side">
          <Link to="/LogIn"> <input type="button" value="Déposer une annonce" /> </Link>
          </div>
          <div className="center">
            <Link to="/" style={{textDecoration:"none", color:"whitesmoke"}} ><h2> ANOUNCI </h2> </Link>
          </div>
          <div className="right-side">
            <Link to="/LogIn">
              <i class="fas fa-user" />
            </Link>
          </div>
        </div>

        <div className="responsive-navbar">
          <div className="menu-icon">
            {this.state.isMenuDipslayed ? <i class="far fa-window-close" onClick={this.toggleIsMenuDiplayedValue}></i>  :<i class="fas fa-bars" onClick={this.toggleIsMenuDiplayedValue}/>}
            <ul className="link-list" style={this.state.isMenuDipslayed ? {display:"block"} : {display:"none"} }>
            <Link to="/LogIn"> <li> Log In </li> </Link>   
            <Link to="/LogIn"> <li> Déposer une annonce </li> </Link>
            </ul>
          </div>
          <div className="logo">
            <h2> ANOUNCI </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
