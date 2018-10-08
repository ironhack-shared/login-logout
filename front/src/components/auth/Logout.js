// auth/Signup.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import AuthService from './AuthService'

class Logout extends Component {
  constructor(props){
    super(props);
    this.service = new AuthService();
    this.service.logout()
    // this.setState({userInSession : { loggedInUser: null }})
  }

  render() {
    return (<div>
        You have been logged out
      </div>)
  }
}

export default Logout;