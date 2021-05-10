import React, { useState,useEffect } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import auth from '../firebase';
import {NavLink} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';


function Login() {
  const [session, setSession] = useState({
    isLoggedIn: true,
    currentUser: null,
    errorMessage: null
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: false,
          currentUser: user,
          errorMessage: null
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);



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
    <div className = 'loginbody'>{
      session.isLoggedIn ? (<Dashboard />): (<SignIn setSession = {setSession}/>)
      
    }
        
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