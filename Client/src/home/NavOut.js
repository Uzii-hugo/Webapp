import React from 'react';
import {NavLink} from 'react-router-dom';

const NavOut = () =>{

    return (
    <header className="homehead">
        <nav className="header">
            <NavLink exact activeClassName="active leftbar" to="/">หน้าหลัก</NavLink>
            <NavLink activeClassName="active leftbar" to="/dashboard">ดูดวงไพ่ยิปซี</NavLink>
            <NavLink activeClassName="active leftbar" to="/404">ดูดวงลายมือ</NavLink>
            <NavLink activeClassName="active leftbar" to="/404">ดูดวงวันเกิด</NavLink>
            <NavLink activeClassName="active" to="/SignIn" className= "rightbar">LogIn</NavLink>
        </nav>
    </header>)
    
}

export default NavOut