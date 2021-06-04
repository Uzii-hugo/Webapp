import React from 'react';
import { BrowserRouter,NavLink,Route,Switch} from 'react-router-dom';
import {AuthProvider} from './Login/Auth'
import Dashboard from './Dashboard/Dashboard';
import Home from './home/Home';
import Navbar from './home/Navbar';
import SignUp from './Login/SignUp';
import SignIn from './Login/SignIn';
import TheeCard from './Dashboard/TheeCard';
import OneCard from './Dashboard/OneCard';
import Show from './Dashboard/ShowOneCard';
import PickUp from './Dashboard/Pickup';
import Proflie from './Dashboard/proflie';
import waiting from './context/404'

function App() {
  return (
    <AuthProvider>
      
        <div>
          <BrowserRouter>
            <div className ="homehead">
              <Navbar></Navbar>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/SignIn" component={SignIn} />
                <Route path='/theecard' component={TheeCard} />
                <Route path='/onecard' component={OneCard} />
                <Route path='/show' component={Show}/>
                <Route path='/PickUp' component={PickUp}/>
                <Route path='/proflie' component={Proflie}/>
                <Route path='/404' component={waiting}/>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      
      
    </AuthProvider>
    
  );
}
export default App;