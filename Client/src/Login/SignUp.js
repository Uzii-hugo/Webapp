import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {NavLink,Redirect} from 'react-router-dom';
import auth from '../firebase/config1';


const SignUp =() => {
    
    const [currenUser, setCurrenUser] = useState(null);

    const handleSubmit = (e) => {
        e.prevenDefault();
        const { email, password } = e.target.elements;

        try{
            auth.auth().createUserWithEmailAndPassword(email.value,password.value);
            setCurrenUser(true);
        }catch(error){
            alert(error);
        }
    }

    if (currenUser) {
        return <Redirect to="/SignIn" />
    }
        return(
            <>
            <div className="login">
            <form onSubmit = {handleSubmit}>
                <h1>Sign Up</h1>
                <div className="social-container">
                    <a className="social"><i className="fa fa-facebook-f"></i></a>
                    <a className="social"><i className="fa fa-google"></i></a>
                    <a className="social"><i className="fa fa-linkedin"></i></a>
                </div>
                
                <input type="email" name = "email"placeholder="Email" />
                <input type="password" name ="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button type="submit">Sign Up</button>
                <a>
                    <NavLink activeClassName="active" to="/SignIn" > <i className="fa fa-chevron-right"></i>Sign In</NavLink>
                </a>
            </form>
        </div>
        </>
        )
}

export default SignUp