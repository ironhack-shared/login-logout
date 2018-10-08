// navbar/Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';
import { Redirect } from 'react-router'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <ul>
            <li><button onClick={this.props.logout}>hacer logout</button></li>
          </ul>

          <h2>Welcome, {this.state.loggedInUser.username}</h2>
        </nav>
      )
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
            </ul>
          </nav>
        </div>
      )
    }
  }
}

export default Navbar;