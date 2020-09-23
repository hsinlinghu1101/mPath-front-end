import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import SignUpRoute from '../SignUp/SignUpRoute'
import LoginRoute from '../Login/LoginRoute'
import HomeRoute from '../Home/HomeRoute'
import ChattingRoom from '../ChattingRoom/ChattingRoom'
import Heading from '../Heading/Heading'
import './App.css';

export class App extends Component{

  state={
    user_name:localStorage.user_name || ''
  };
  
  
  
  render(){ 
  return (
    <div className="App">
      <Heading/>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route  path='/register' component={SignUpRoute}/>
        <Route  path='/login' component={LoginRoute} />
        <Route path='/user/:user_id' render={(routerProps)=><HomeRoute match={routerProps.match} 
        history={routerProps.history} name={this.state.user_name}/>}/>
        <Route path='/chatting-room' component={ChattingRoom}/>
      </Switch>
    </div>
  );
 }
}

export default App;
