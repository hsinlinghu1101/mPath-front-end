import React, { Component } from 'react'
import Form_Lis from './Form_Lis'
import Form_Spe from './Form_Spe'
export class Home extends Component {
    state={
        listener:false,
        speaker:false
    }
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
               {this.state.speaker && <Form_Spe/>}
               {this.state.listener && <Form_Lis/>}
              
            
            </div>
        )
    }
}

export default Home
