import React from 'react';
import { BrowserRouter,NavLink,Route,Switch} from 'react-router-dom';
import {AuthProvider} from './Login/Auth'
import Home from './home/Home';
import Navbar from './home/Navbar';
import SignUp from './Login/SignUp';
import SignIn from './Login/SignIn';
import TheeCard from './Dashboard/TheeCard';
import OneCard from './Dashboard/OneCard';
import Show from './context/ShowOneCard';
import PickUp from './Dashboard/Pickup';
import Proflie from './Dashboard/proflie';
import Waiting from './context/404'
import ShowContent from './context/ShowContent'
import BirthdayHoroscope from './context/BirthdayHoroscope'
import HandWriting from './context/HandWriting'
import CreateContent from './context/CeateContent'

function App() {
  return (
    <AuthProvider>
        <div>
          <BrowserRouter>
            <div className ="homehead">
              <Navbar></Navbar>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/SignIn" component={SignIn} />
                <Route path='/theecard' component={TheeCard} />
                <Route path='/onecard' component={OneCard} />
                <Route path='/show' component={Show}/>
                <Route path='/PickUp' component={PickUp}/>
                <Route path='/proflie' component={Proflie}/>
                <Route path='/404' component={Waiting}/>
                <Route path='/showcontent' component = {ShowContent}/>
                <Route path='/Bd' component = {BirthdayHoroscope}/>
                <Route path='/Hw' component = {HandWriting}/>
                <Route path='/CC' component = {CreateContent}/>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      
      
    </AuthProvider>
    
  );
}
export default App;