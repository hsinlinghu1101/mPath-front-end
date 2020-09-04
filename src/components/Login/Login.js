import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export class Login extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
      };
    
      state = {
        error: null,
        loading: false,
        user_name: ''
      };
    
      NameChange = (e) => {
        this.props.onUserNameChange(e.target.value)
        this.setState({
          user_name: e.target.value
        })
      }
    
    
      handleLogin = (e) => {
        e.preventDefault();
        this.setState({
          error: null,
          loading: true
        })
    
        const { user_name, password } = e.target
    
        this.props.onUserNameChange(this.state.user_name)
        AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value
        })
    
          .then(data => {
            // The JWT handler only stores the token if the request is successful
            TokenService.saveAuthToken(data.authToken)
            user_name.value = ''
            password.value = ''
            this.props.onLoginSuccess(data.user_id)
          })
    
          .catch(res => {
            this.setState({
              error: res.error,
              loading:false
            })
          })
      }
    
    render() {
        return (
            <div>
                 <form onSubmit={this.handleLogin}>
                   <label>Your Name</label>
                   <input type="text" name="user_name" />
                   <br></br>
                   <label>Password</label>
                   <input type="password" name="password" />
                   <button type="submit">Submit</button>
                   <Link to="/">Cancel</Link>
                </form> 
            </div>
        )
    }
}

export default Login
