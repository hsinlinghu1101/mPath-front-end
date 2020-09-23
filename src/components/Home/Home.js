import React, { Component } from 'react'
import FormLis from './FormLis'
import FormSpe from './FormSpe'
import MPathContext from '../../context/MPathContext'
export class Home extends Component {
    
    static contextType = MPathContext
   
    render() {
        return (
            <div>
               <button onClick={this.context.setListener}>I want to Listen</button> 
               <button onClick={this.context.setSpeaker}>I have things to share</button> 
               {this.context.speaker && <FormSpe handlePairsSuccess={this.props.handlePairsSuccess}/>}
               {this.context.listener && <FormLis handlePairsSuccess={this.props.handlePairsSuccess}/>}
              
            
            </div>
        )
    }
}

export default Home
