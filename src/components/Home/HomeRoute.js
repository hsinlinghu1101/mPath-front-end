import React, { Component } from 'react'
import Home from './Home'
import MPathContext from '../../context/MPathContext'

export class HomeRoute extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    }
    handlePairsSuccess=()=>{
        const { history }= this.props
        history.push(`/chatting-room`)
    }
    static contextType = MPathContext
    render() {
        return ( 
            <div>
            
            <Home handlePairsSuccess={this.handlePairsSuccess}/>
            </div>
        )
    }
}

export default HomeRoute
