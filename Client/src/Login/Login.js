import React, { useContext } from 'react';
import SignIn from './SignIn';
import { AuthContext } from './Auth'
import { Link } from 'react-router-dom';



function Login() {
  const { currenUser } = useContext(AuthContext);

  return (
    <div className="container">
    {currenUser ? (
        <Link to="/">View Dashboard</Link>
      ) : (
        <p>
          <SignIn> </SignIn>
        </p>
      )}
    </div>
  );
}

export default Login;