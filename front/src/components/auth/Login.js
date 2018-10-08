// auth/Signup.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import AuthService from './AuthService'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
    .then( response => {
        this.setState({
            username: username, 
            password: password,
        });

        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Login" />
        </form>

      </div>
    )
  }
}

export default Login;