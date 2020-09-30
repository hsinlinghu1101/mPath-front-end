import React, { Component } from 'react'
import TokenService from '../services/token-service'

const MPathContext = React.createContext({
  user: {},
  myPair:{},
  speaker:false,
  listener:false,
  error: null,
  setListener:()=>{},
  setSpeaker:()=>{},
  setPair:()=>{},
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
})

export default MPathContext

export class MPathProvider extends Component {
  constructor(props) {
    super(props)
    const state = { user: {}, speaker: false, listener: false, myPair:{}, error: null }

    const jwtPayload = TokenService.parseAuthToken()

    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,
        user_name: jwtPayload.sub,
      }

    this.state = state;
  }


  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setUser = user => {
    this.setState({ user })
  }
  setmyPair=myPair=>{
    this.setState({myPair})
  }
  setListener=()=>{
    this.setState({
        listener:true,
        speaker:false
    })
    
 }
 setSpeaker=()=>{
     this.setState({
         speaker:true,
         listener:false
     })
 }

  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.user_id,
      user_name: jwtPayload.sub
    })
  }

  processLogout = () => {
    TokenService.clearAuthToken()
    this.setUser({})
    this.setState({
      speaker:false,
      listener:false
  })
  }

  render() {
    const value = {
      user: this.state.user,
      speaker:this.state.speaker,
      listener:this.state.listener,
      myPair: this.state.myPair,
      error: this.state.error,
      setListener:this.setListener,
      setSpeaker: this.setSpeaker,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
      setmyPair:this.setmyPair
    }
    return (
      <MPathContext.Provider value={value}>
        {this.props.children}
      </MPathContext.Provider>
    )
  }
}