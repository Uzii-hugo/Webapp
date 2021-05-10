import React from 'react';
import { BrowserRouter,NavLink,Route,Switch} from 'react-router-dom';

import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Home from './home/Home';
import SignUp from './Login/SignUp';
import SignIn from './Login/SignIn';

function App() {
    const 
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <header className="homehead">
            <nav className="header">
              <NavLink exact activeClassName="active" to="/">หน้าหลัก</NavLink>
              <NavLink activeClassName="active" to="/dashboard">ดูดวง</NavLink>
              <NavLink activeClassName="active" to="/login" className= "rightbar">Login</NavLink>
            </nav>
          </header>
          <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/SignIn" component={SignIn} />
            </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;