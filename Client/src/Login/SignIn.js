import React, { useContext } from 'react';
import auth from '../firebase/config1';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth'

const SignIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

         try {
            const check = auth.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
            //console.log(check);
        } catch (error) {
            alert(error);
            
        }
    }
    const { currenUser } = useContext(AuthContext);
    if (currenUser) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <div className="social-container">
                    <a className="social"><i className="fa fa-facebook-f"></i></a>
                    <a className="social"><i className="fa fa-google"></i></a>
                    <a className="social"><i className="fa fa-linkedin"></i></a>
                </div>
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <a href="#">Forgot your password?</a>
                <button type="submit" >Sign In</button>
                <NavLink activeClassName="active" to="/SignUp" > <i className="fa fa-chevron-right"></i>Sign Up</NavLink>
            </form>
        </div>
    );

}

export default SignIn