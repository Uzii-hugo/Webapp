import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import SignUp from './Login/SignUp';
import SignIn from './Login/SignIn';
import {AuthProvider} from './Login/Auth'

function App1() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }

  export default App1;
