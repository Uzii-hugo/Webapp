import React from 'react';
import {NavLink} from 'react-router-dom';

const NavOut = () =>{

    return (
    <header className="homehead">
        <nav className="header">
            <NavLink exact activeClassName="active" to="/">หน้าหลัก</NavLink>
            <NavLink activeClassName="active" to="/dashboard">ดูดวง</NavLink>
            <NavLink activeClassName="active" to="/SignIn" className= "rightbar">LogIn</NavLink>
        </nav>
    </header>)
    
}

export default NavOut