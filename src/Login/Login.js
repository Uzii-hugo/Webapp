import React, { useState } from 'react';

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
    <>
      <div className= 'login'>
        <h1>Login</h1>
        <div> Username
          <input type="email" placeholder="Email" onChange={handleUsername} />
        </div>
        <div> Password
          <input type="password" placeholder="Password" onChange={handlePassword}/>
        </div>
          {error && <><small style={{ color: 'red' }}>{error}</small></>}
        <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
      </div>
    </>
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