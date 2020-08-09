import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import SignUpRoute from '../SignUp/SignUpRoute'
import LoginRoute from '../Login/LoginRoute'
import HomeRoute from '../Home/HomeRoute'
import Heading from '../Heading/Heading'
import './App.css';

export class App extends Component{

  state={
    user_name:localStorage.user_name || ''
  };
  
  onUserNameChange=(name)=>{
    localStorage.user_name= name
    this.setState({
      user_name:name
    })
  };
  
  render(){ 
  return (
    <div className="App">
      <Heading/>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route  path='/register' component={SignUpRoute}/>
        <Route  path='/login' render={(props)=><LoginRoute onUserNameChange={this.onUserNameChange} {...props}/>}/>
        <Route path='/user/:user_id' render={(routerProps)=><HomeRoute match={routerProps.match} 
        history={routerProps.history} name={this.state.user_name}/>}/>
      </Switch>
    </div>
  );
 }
}

export default App;