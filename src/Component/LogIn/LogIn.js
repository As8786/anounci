import React from "react";
import "./LogIn.css";

class LogIn extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="form-container">
          <form>
            <div className="input-line">
              <label> Email </label>
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-line">
              <label> Password </label>
              <input type="password" placeholder="Password" />
            </div>

            <div className="input-button">
              <input type="submit" value="Submit" />
            </div>
            
          </form>
        </div>
      </div>
    );
  }
}

export default LogIn;
