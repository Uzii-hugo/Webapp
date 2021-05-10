import React, {useState} from 'react';
import auth from '../firebase';
import 'font-awesome/css/font-awesome.min.css';
import {NavLink} from 'react-router-dom';


const SignIn = ({setSession}) =>{

    const [username, setUsername] =useState('');
    const [password, setPassword] =useState('');

    const handleLogin = async () => {
        try {
            const response = await auth.signInWithEmailAndPassword(username, password);
      
            const { user } = response;
      
            setSession({
              isLoggedIn: true,
              currentUser: user
            });
          } catch (error) {
            setSession({
              isLoggedIn: false,
              currentUser: null,
              errorMessage: error.message
            });
          }
       };

    const handleUsername = event => {
        setUsername(event.target.value)
    }
 
    const handlePassword = event => {
     setPassword(event.target.value)
 }

    return(
        <div className="login">
            <form>
                <h1>Sign in</h1>
                <div className="social-container">
                    <a className="social"><i className="fa fa-facebook-f"></i></a>
                    <a className="social"><i className="fa fa-google"></i></a>
                    <a className="social"><i className="fa fa-linkedin"></i></a>
                </div>
                <input type="email" placeholder="Email" onChange={handleUsername}/>
                <input type="password" placeholder="Password" onChange={handlePassword}/>
                <a href="#">Forgot your password?</a>
                <button type="button" onClick={handleLogin}>Sign In</button>
                <a>
                <NavLink activeClassName="active" to="/SignUp" > <i className="fa fa-chevron-right"></i>Sign Up</NavLink>
                </a>
            </form>
        </div>
    );

};

export default SignIn