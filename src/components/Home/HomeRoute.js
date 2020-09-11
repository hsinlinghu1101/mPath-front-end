import React, { Component } from 'react'
import Home from './Home'
import MPathContext from '../../context/MPathContext'

export class HomeRoute extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    }

    static contextType = MPathContext
    render() {
        return ( 
            <div>
            
            <Home/>
            </div>
        )
    }
}

export default HomeRoute
