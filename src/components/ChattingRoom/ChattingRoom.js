import React, { Component } from 'react'
import PairsApiService from '../../services/pairs-api-service'
import MPathContext from '../../context/MPathContext'

export class ChattingRoom extends Component {
    static contextType = MPathContext
    componentDidMount(){
        if(this.context.listener){
            PairsApiService.getSpeaker()
              .then(res => console.log(res))
              .catch(this.context.error)
        }
        if(this.context.speaker){
            PairsApiService.getListener()
              .then(res => console.log(res))
              .catch(this.context.error)
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ChattingRoom
