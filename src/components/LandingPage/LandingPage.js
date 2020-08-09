import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class LandingPage extends Component {
    render() {
        return (
            <div>
              <h1>We're here for you</h1>
              <p>If you're a good listener or you're looking for a person to talk to, this is the place.
                  mPath is a platform to have a warm conversation. 
              </p>
              <Link to='/register'>Join us</Link>
              
            </div>
        )
    }
}

export default LandingPage
