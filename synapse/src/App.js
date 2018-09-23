import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/nav/Nav'
import Dashboard from './Components/dashboard/Dashboard'
import SignIn from './Components/auth/SignIn'
import SignUp from './Components/auth/SignUp'
import Friends from './Components/friends/Friends';


class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
