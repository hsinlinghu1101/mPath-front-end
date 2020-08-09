import React, { Component } from 'react'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom'

class Heading extends Component {
    render() {
        return (
            <div>
               <Link to='/'><img className='sleep' src={logo} alt="logo" /></Link> 
               <nav>
                   <Link to='/login'>Login</Link>
               </nav>
            </div>
        )
    }
}

export default Heading
