import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavLogin from './Components/auth/NavLogin'
import Dashboard from './Components/dashboard/Dashboard'
import SignIn from './Components/auth/SignIn'
import SignUp from './Components/auth/SignUp'
import FriendList from './Components/pages/FriendList';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/friendlist' component={FriendList} />
          </Switch>
          <NavLogin /> 
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
