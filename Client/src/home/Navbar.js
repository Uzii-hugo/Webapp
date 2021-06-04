import React, {useContext}from 'react';
import {NavLink} from 'react-router-dom';
import {AuthContext} from '../Login/Auth';
import auth from '../firebase/config1';
import logo from '../img/logo.png'
const Navbar = ()=>{
  
  
    const {currenUser} = useContext(AuthContext);
    if (currenUser) {
        return (
        <header>
        <nav className="header">
            <img className="logo leftbar" src = {logo} alt="logo"/>
            <NavLink exact activeClassName="active " to="/">หน้าหลัก</NavLink>
            <NavLink activeClassName="active " to="/PickUp">ดูดวงไพ่ยิปซี</NavLink>
            <NavLink activeClassName="active " to="/404">ดูดวงลายมือ</NavLink>
            <NavLink activeClassName="active " to="/404">ดูดวงวันเกิด</NavLink>
            <NavLink activeClassName="active rightbar" to="/proflie">โปรไฟล์</NavLink>
            <NavLink activeClassName="active " to="/SignIn" className= "rightbar">ออกจากระบบ</NavLink>
            <button  onClick={() => auth.auth().signOut()} className= "rightbar">ออกจากระบบ</button>
        </nav>
        </header>)
    }
    
    return(
    <header>
      <nav className="header">
        <img className="logo leftbar" src = {logo} alt="logo"/>
        <NavLink exact activeClassName="active " to="/">หน้าหลัก</NavLink>
        <NavLink activeClassName="active " to="/PickUp">ดูดวงไพ่ยิปซี</NavLink>
        <NavLink activeClassName="active " to="/404">ดูดวงลายมือ</NavLink>
        <NavLink activeClassName="active " to="/404">ดูดวงวันเกิด</NavLink>
        <NavLink activeClassName="active " to="/SignIn" className= "rightbar">เข้าสู่ระบบ</NavLink>
        
      </nav>
    </header>)
      
    
}
export default Navbar