import React, {useContext} from 'react';
import auth from '../firebase/config1';

import 'font-awesome/css/font-awesome.min.css';
import {NavLink,Redirect} from 'react-router-dom';
import {AuthContext} from './Auth'

const SignIn = () =>{

    const handleSubmit = (e) =>{
        e.preventDefault();

        const {email, password } = e.target.elements;

        try {
            auth.auth().signInWithEmailAndPassword(email.value, password.value);
        }catch(error){
            alert(error);
        }
    }

    const {currenUser} = useContext(AuthContext);
    if (currenUser) {
        return <Redirect to="/dashboard"/>
    }

//     const [username, setUsername] =useState('');
//     const [password, setPassword] =useState('');

//     const handleLogin = async () => {
//         try {
//             const response = await auth.signInWithEmailAndPassword(username, password);
      
//             const { user } = response;
      
//             setSession({
//               isLoggedIn: true,
//               currentUser: user
//             });
//           } catch (error) {
//             setSession({
//               isLoggedIn: false,
//               currentUser: null,
//               errorMessage: error.message
//             });
//           }
//        };

//     const handleUsername = event => {
//         setUsername(event.target.value)
//     }
 
//     const handlePassword = event => {
//      setPassword(event.target.value)
//  }

    return(
        <div className="login">
            <form onSubmit = {handleSubmit}>
                <h1>Sign in</h1>
                <ul className="social-container">
                    <li><i className="fa fa-facebook-f"></i></li>
                    <li><i className="fa fa-google"></i></li>
                    <li><i className="fa fa-linkedin"></i></li>
                </ul>
                <input type="email" placeholder="Email" name = "email"/>
                <input type="password" placeholder="Password" name = "password"/>
                <a href="#">Forgot your password?</a>
                <button type="submit" >Sign In</button>
                <NavLink activeClassName="active" to="/SignUp" > <i className="fa fa-chevron-right"></i>Sign Up</NavLink>
            </form>
        </div>
    );

}

export default SignIn