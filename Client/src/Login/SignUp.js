import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {NavLink} from 'react-router-dom';
import auth from '../firebase/config1';


const SignUp =() => {
    
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.prevenDefault();
        const { email, password , name , sername} = e.target.elements;

        try{
            auth.auth().createUserWithEmailAndPassword(email.value,password.value);
            setCurrentUser(true);
        }catch(error){
            alert(error);
        }
    }
        return(
            <div className="login">
            <form onSubmit = {handleSubmit}>
                <h1>Sign Up</h1>
                <div className="social-container">
                    <a className="social"><i className="fa fa-facebook-f"></i></a>
                    <a className="social"><i className="fa fa-google"></i></a>
                    <a className="social"><i className="fa fa-linkedin"></i></a>
                </div>
                <input type="name" name = "name"placeholder="Name" />
                <input type="sername" name = "sername"placeholder="Sername" />
                <input type="email" name = "email"placeholder="Email" />
                <input type="password" name ="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button type="submit">Sign Up</button>
                <a>
                    <NavLink activeClassName="active" to="/SignIn" > <i className="fa fa-chevron-right"></i>Sign In</NavLink>
                </a>
            </form>
        </div>
        )
}

export default SignUp