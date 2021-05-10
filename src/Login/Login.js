import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';


function Login(props) {
  // const username = useFormInput('');
  // const password = useFormInput('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    console.log(username,password)
    // props.history.push('/dashboard');

  }

  const handleUsername = e => {
    setUserName(e.target.value);
  }

  const handlePassword = e => {
    setPassword(e.target.value);
  }

  return (
    <div className = 'loginbody'>
        <SignIn/>
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