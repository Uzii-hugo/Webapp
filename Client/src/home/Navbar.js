import React, {useContext,useState}from 'react';
import { NavLink} from 'react-router-dom';
import {AuthContext} from '../Login/Auth';
import auth from '../firebase/config1';
const Navbar = ()=>{
  
  
    const {currenUser} = useContext(AuthContext);
    if (currenUser) {
        return (
        <header className="homehead">
        <nav className="header">

            <NavLink exact activeClassName="active" to="/">หน้าหลัก</NavLink>
            <NavLink activeClassName="active" to="/dashboard">ดูดวง</NavLink>
            <NavLink activeClassName="active" to="/SignIn" className= "rightbar">Logout</NavLink>
            <button  onClick={() => auth.auth().signOut()} className= "rightbar">Sign Out</button>
        </nav>
        </header>)
    }
    
    return(
    <header className="homehead">
      <nav className="header">
        {/* <img
            src = '../img/logo.png'
            width="30"
            height="30"
            className="logo"
            // alt="logo"
        /> */}
        <NavLink exact activeClassName="active" to="/">หน้าหลัก</NavLink>
        <NavLink activeClassName="active" to="/dashboard">ดูดวง</NavLink>
        <NavLink activeClassName="active" to="/SignIn" className= "rightbar">Login</NavLink>
      </nav>
    </header>)
      
    
}
export default Navbar