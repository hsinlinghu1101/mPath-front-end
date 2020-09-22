import React, { Component } from 'react'
import FormLis from './FormLis'
import FormSpe from './FormSpe'
import MPathContext from '../../context/MPathContext'
export class Home extends Component {
    /*state={
        listener:false,
        speaker:false
    }*/
    static contextType = MPathContext
    handleListener=()=>{
       this.setState({
           listener:true,
           speaker:false
       })
       
    }
    handleSpeaker=()=>{
        this.setState({
            speaker:true,
            listener:false
        })
    }
    render() {
        return (
            <div>
               
               <button onClick={this.handleListener}>I want to Listen</button> 
               <button onClick={this.handleSpeaker}>I have things to share</button> 
               {this.context.speaker && <FormSpe handlePairsSuccess={this.props.handlePairsSuccess}/>}
               {this.context.listener && <FormLis handlePairsSuccess={this.props.handlePairsSuccess}/>}
              
            
            </div>
        )
    }
}

export default Home
