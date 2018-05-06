import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./navBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuDipslayed: false
    };
  }

  toggleIsMenuDiplayedValue = () => {
    this.setState({
      isMenuDipslayed: !this.state.isMenuDipslayed
    });
  };

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-large-size">
          <div className="left-side">
            <Link to="/login">
              <input type="button" value="Déposer une annonce" />
            </Link>
          </div>
          <div className="center">
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              <h2> ANOUNCI </h2>
            </Link>
          </div>
          <div className="right-side">
            {this.props.connectedUser.name ? (
              <Link to="/home">
                <i class="fas fa-sign-out-alt" onClick={this.props.logOut}>
                </i>
              </Link>
            ) : (
              <Link to="/login">
                <i class="fas fa-user" />
              </Link>
            )}
            {this.props.connectedUser && <span>{this.props.connectedUser.name}</span>}
          </div>
        </div>

        <div className="responsive-navbar">
          <div className="menu-icon">
            {this.state.isMenuDipslayed ? (
              <i
                class="far fa-window-close"
                onClick={this.toggleIsMenuDiplayedValue}
              />
            ) : (
              <i class="fas fa-bars" onClick={this.toggleIsMenuDiplayedValue} />
            )}
            <ul
              className="link-list"
              style={
                this.state.isMenuDipslayed
                  ? { display: "block" }
                  : { display: "none" }
              }>
              {this.props.connectedUser.name ? <Link to="/home"> <li onClick={this.props.logOut}> Log Out </li> </Link> : <Link to="/login"> <li> Log In </li> </Link>}
              <Link to="/login">
                <li> Déposer une annonce </li>
              </Link>
            </ul>
          </div>
          <div className="logo">
          <Link
              to="/home"
              style={{ textDecoration: "none", color: "whitesmoke" }}>
              <h2> ANOUNCI </h2>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    connectedUser: state.ConnectedUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      dispatch({
        type: "LOG_OUT"
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
