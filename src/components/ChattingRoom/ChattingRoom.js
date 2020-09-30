import React, { Component } from 'react'
import PairsApiService from '../../services/pairs-api-service'
import MPathContext from '../../context/MPathContext'

export class ChattingRoom extends Component {
    static contextType = MPathContext
    
   /* componentDidMount(){
        if(this.context.listener){
            PairsApiService.getSpeaker(topic, spe_gender, spe_age)
              .then(res => this.setState({pair:res}))
              .catch(this.context.error)
        }
        if(this.context.speaker){
            PairsApiService.getListener(topic, lis_gender, lis_age)
              .then(res => this.setState({pair:res}))
              .catch(this.context.error)
        }
    }*/
    
    render() {
        return (
            <div>
                <h2>{this.context.pair}</h2>
                
            </div>
        )
    }
}

export default ChattingRoom
