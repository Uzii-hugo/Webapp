import React, { Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {NavLink} from 'react-router-dom';


class SignIn extends Component{

    render(){
        return(
            <div className="login">
                <form>
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a className="social"><i className="fa fa-facebook-f"></i></a>
                        <a className="social"><i className="fa fa-google"></i></a>
                        <a className="social"><i className="fa fa-linkedin"></i></a>
                    </div>
			        <input type="email" placeholder="Email" />
			        <input type="password" placeholder="Password" />
			        <a href="#">Forgot your password?</a>
			        <button>Sign In</button>
                    <a>
                    <NavLink activeClassName="active" to="/SignUp" > <i className="fa fa-chevron-right"></i>Sign Up</NavLink>
                    </a>
                </form>
            </div>
        );
    };
};

export default SignIn