import React, { useState,useEffect,useContext } from 'react';
import SignIn from './SignIn';
import {AuthContext} from './Auth'
import SignUp from './SignUp';
import auth from '../firebase';
import {Link,Redirect} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';


function Login() {
  const { currenUser } = useContext(AuthContext);
  // const [session, setSession] = useState({
  //   isLoggedIn: true,
  //   currentUser: null,
  //   errorMessage: null
  // });

  // useEffect(() => {
  //   const handleAuth = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       setSession({
  //         isLoggedIn: false,
  //         currentUser: user,
  //         errorMessage: null
  //       });
  //     }
  //   });

  //   return () => {
  //     handleAuth();
  //   };
  // }, []);



  // // const username = useFormInput('');
  // // const password = useFormInput('');
  // const [username, setUserName] = useState('');
  // const [password, setPassword] = useState('');

  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // // handle button click of login form
  // const handleLogin = () => {
  //   console.log(username,password)
  //   // props.history.push('/dashboard');

  // }

  // const handleUsername = e => {
  //   setUserName(e.target.value);
  // }

  // const handlePassword = e => {
  //   setPassword(e.target.value);
  // }

  return (
    <div className="container mt-5">
    {currenUser ? (
        <p>You are logged in - <Link to="/dashboard">View Dashboard</Link></p>
    ) : (
        <p>
            <SignIn></SignIn>
        </p>
    )}
</div>
  );
}

// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = e => {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChange: handleChange
//   }
// }

export default Login;