import React, {useContext,useState}from 'react';
import {AuthContext} from '../Login/Auth';
const Text = () =>{
    
    const [currenUser] = useContext(AuthContext);
    const [current, setCurrent] = useState('Login');

    if(!currenUser){
        setCurrent('Logout')
    }
    const text = current;
    return(
        
        <>
        {text}
        </>
    )
}

export default Text;