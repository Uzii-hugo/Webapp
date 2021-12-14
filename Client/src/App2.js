import './App.css';
import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './home';
import addProject from './addProject';

function App() {

  return (
    <div>
      <BrowserRouter>
        <div className ="homehead">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addProject" component={addProject}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
