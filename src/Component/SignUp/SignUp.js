import React from "react";
import "./SignUp.css";

class SignUp extends React.Component {
  render() {
    return (
      <div className="signup-container">
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

            <div className="input-line">
              <label> Password Confirmation </label>
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

export default SignUp;
