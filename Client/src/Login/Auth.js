import React, { useState, useEffect } from 'react';
import auth from '../firebase/config1';
import TaroData from '../Data/TaroData'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currenUser, setCurrenUser] = useState(null);
  
  
  useEffect(() => {
    auth.auth().onAuthStateChanged((user) => {
      setCurrenUser(user);
      setLoading(false);
    })

  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <AuthContext.Provider value={
      {
        currenUser,
      }


    }>
      {children}
    </AuthContext.Provider>
  )
}