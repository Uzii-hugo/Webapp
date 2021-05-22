import React, {useState,useEffect} from 'react';
import auth from '../firebase/config1';
import TaroData from '../Data/TaroData'

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) =>{
    const [loading , setLoading] = useState(true);
    const [currenUser, setCurrenUser] = useState(null);
    const [tarotDeck, setTarotDeck] = useState([...TaroData]);
    const [showTCD, setShowTCD] = useState(false);

    useEffect(() =>{
        auth.auth().onAuthStateChanged((user) =>{
            setCurrenUser(user);
            setLoading(false);     
     })
    
    },[])

    if(loading){
        return <p>Loading...</p>
    }


    const randomCard = array =>{
        let i = 0;
        let j = 0;
        let temp = null;
        for (i = array.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;   
    }

    const threecard = () => {
        setTarotDeck(randomCard(tarotDeck));
        if (showTCD === false) {
            
            setShowTCD(true);  
          } else {
            setShowTCD(false);
            setTimeout(()=> { // this is a hack to set state to false to force a re-render
              setShowTCD(true)
            }, 0)
          }
    }
    return(
        <AuthContext.Provider value= {
            {
            tarotDeck,
            currenUser,
            threecard,
            showTCD
            }
            
            
            }>
            {children}
        </AuthContext.Provider>
    )
}