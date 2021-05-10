import React, {useContext,useState}from 'react';
import { BrowserRouter,NavLink,Route,Switch} from 'react-router-dom';
import {AuthContext} from '../Login/Auth';

const Navbar = ()=>{
    //const [currenUser] = useContext(AuthContext);
    // const [current, setCurrent] = useState('Login');

    // if(!currenUser){
    //     setCurrent('Logout')
    // }
    const text = "Login"
    return(
        <>
        <header className="homehead">
        <nav className="header">
          <NavLink exact activeClassName="active" to="/">หน้าหลัก</NavLink>
          <NavLink activeClassName="active" to="/dashboard">ดูดวง</NavLink>
          <NavLink activeClassName="active" to="/SignIn" className= "rightbar">{text}</NavLink>
        </nav>
      </header>
      </>
    )
}
export default Navbar