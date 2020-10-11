import React, { Component } from 'react'
import PairsApiService from '../../services/pairs-api-service'
import MPathContext from '../../context/MPathContext'

export class ChattingRoom extends Component {
    static contextType = MPathContext

    state={
        pair:{}
    }
    
      componentDidMount(){
        if(this.context.listener){
           const getSpe= this.context.pairLis
            PairsApiService.getSpeaker(getSpe.topic, getSpe.spe_gender, getSpe.spe_age)
              .then(res => this.setState({pair:res}))
              .catch(this.context.error)
        }
        if(this.context.speaker){
            const getLis= this.context.pairSpe
            PairsApiService.getListener(getLis.topic, getLis.lis_gender, getLis.lis_age)
              .then(res => this.setState({pair:res}))
              .catch(this.context.error)
        }
    
    }
    render() {
        
        return (
            
            <div>
                <h3>{this.context.error}</h3>
                {this.context.listener && <h2> Your speaker is {this.state.pair.user_name}</h2>}
                {this.context.speaker&& <h2>Your listener is {this.state.pair.user_name}</h2>}
                
                
            </div>
        )
    }
}

export default ChattingRoom
