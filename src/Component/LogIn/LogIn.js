import React from "react";
import {Link} from 'react-router-dom'

import "./LogIn.css";

class LogIn extends React.Component {
  constructor(props){
    super(props)
    this.state={
      email : "",
      password : ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }


  formValidator = (object) => {
    let message = []
    for(let i in object) {
      if(object[i] === ""){
        message.push(`${i} is still empty, please to fill it`)
      }
    }
    return message
  }

  
  render() {
    return (
      <div className="login-container">
          <form>
            <div className="input-line">
              <label> Email </label>
              <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
            </div>

            <div className="input-line">
              <label> Password </label>
              <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
            </div>

            <div className="input-button">
              <input type="button" value="Submit" 
                onClick={()=>{this.formValidator(this.state).length === 0 ? alert('user added') : alert(this.formValidator(this.state))}}
              />
            </div>
            
            <div className="condition-signIn" >
                <p>
                   No account, 
                   <Link to="/SignUp" className="signin-link">create one</Link> 
                </p>  
            </div>
          </form>
      </div>
    );
  }
}

export default LogIn;
