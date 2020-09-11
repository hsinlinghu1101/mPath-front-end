import React, { Component } from 'react'
import logo from '../../image/logo.png'
import MPathContext from '../../context/MPathContext'
import TokenService from '../../services/token-service'
import { Link } from 'react-router-dom'

class Heading extends Component {
    static contextType = MPathContext

    handleLogoutClick = () => {
        this.context.processLogout()
      }

    renderLogoutLink() {
        return (
          <div>
            <h3>Welcome, {this.context.user.user_name}</h3>       
              <Link
                onClick={this.handleLogoutClick}
                to='/login'>
                Logout
              </Link>  
          </div>
        )
      }
      renderLoginLink() {  
        return (    
          <div>
            <Link to='/login' >Login</Link>
            {' '}
            <Link to='/register' >Sign up</Link>
          </div>
        )
      }

    render() {
        return (
            <div>
               <Link to='/'><img src={logo} alt="logo" /></Link> 
               <nav>
               {TokenService.hasAuthToken()
                ? this.renderLogoutLink() 
                : this.renderLoginLink()
               }       
               </nav>
            </div>
        )
    }
}

export default Heading
