import React, { useState, useEffect } from 'react';
import auth from '../firebase/config1';


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currenUser, setCurrenUser] = useState(null);
  const [showcontent,setContent] = useState(null);
  
  
  useEffect(() => {
    auth.auth().onAuthStateChanged((user) => {
      setCurrenUser(user);
      setLoading(false);
    })

  }, [])

  const show = ((content)=>{
      setContent(content)
  })

  // useEffect(()=>{
  //   setUid(curruser.uid)
  // },[currenUser])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <AuthContext.Provider value={
      {
        currenUser,
        showcontent,
        show
      }


    }>
      {children}
    </AuthContext.Provider>
  )
}