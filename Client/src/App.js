import React from 'react';
import { BrowserRouter,NavLink,Route,Switch} from 'react-router-dom';
import {AuthProvider} from './Login/Auth'
import {Provider} from './context/context'
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Home from './home/Home';
import Navbar from './home/Navbar';
import SignUp from './Login/SignUp';
import SignIn from './Login/SignIn';
import NavLogIn from './home/NavLog';
import NavOut from './home/NavOut';
import TheeCard from './Dashboard/TheeCard';
import OneCard from './Dashboard/OneCard';

function App() {
  return (
    <AuthProvider>
      
        <div className="App">
          <BrowserRouter>
            <div className ="homehead">
              <Navbar></Navbar>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/SignIn" component={SignIn} />
                <Route path="/navlogin" component={NavLogIn} />
                <Route path="/navout" component={NavOut} />
                <Route path='/theecard' component={TheeCard} />
                <Route path='/onecard' component={OneCard} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      
      
    </AuthProvider>
    
  );
}
export default App;