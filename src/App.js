import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Home from './home/Home';

function App() {
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
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;