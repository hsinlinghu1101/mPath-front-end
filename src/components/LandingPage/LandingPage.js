import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import landing from '../../image/landing.jpg'
import landing2 from '../../image/landing2.jpg'
import './LandingPage.css';
import styled from 'styled-components';

const LinkElement = styled.div`
 a{
 font-size: 20px;
 text-decoration: none;
 color:blue;
 :hover{
    font-size: 25px;  
    color: orange;
 }
}
`
export class LandingPage extends Component {
    render() {
        return (
            <div>
              <img className='landingImg' src={landing} alt="landing" />
              <p>Sometimes, you just need to rant. Or cry. Or spill the tea. Whatever it is you need, we’re here for you, 
                  all the time, every time. With personalized 1:1 attention and resources galore, we want to make sure you feel supported, 
                  every step of the way.
              </p>
              <h2>Join our community to share your story or support someone by listening</h2>
              <LinkElement>
               <Link to='/register'>Join Now</Link>
              </LinkElement>
              <h2>Beyond the Talk</h2>
              <img  className='landing2' src={landing2} alt="landing2" />
              <p >If you loved the one time talk with a stranger and would like to continue improving your mental health journey, 
                  check out our recurring resources below!</p>
              
            </div>
        )
    }
}

export default LandingPage
