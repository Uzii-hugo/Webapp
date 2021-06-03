import React, { useState, useEffect, useContext } from 'react';
import SignIn from './SignIn';
import { AuthContext } from './Auth'
import SignUp from './SignUp';
import auth from '../firebase';
import { Link, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';


function Login() {
  const { currenUser } = useContext(AuthContext);

  return (
<<<<<<< HEAD
    <div className="container">
    {currenUser ? (
=======
    <div className="container mt-5">
      {currenUser ? (
>>>>>>> boss
        <p>You are logged in - <Link to="/dashboard">View Dashboard</Link></p>
      ) : (
        <p>
          <SignIn> </SignIn>
        </p>
      )}
    </div>
  );
}

export default Login;