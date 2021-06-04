import React, { useState, useEffect,useContext } from 'react';
import TaroData from '../Data/TaroData'
import BackTarot from '../img/BackToro.png'
import firebase from '../firebase/config1'
import Show from '../context/ShowOneCard';
import { AuthContext } from '../Login/Auth'
import { Redirect } from "react-router-dom"
import Load from './Loading';

const OneCard = () => {
  const [showTCD, setShowTCD] = useState(true);
  const [tarotDeck, setTarotDeck] = useState([...TaroData]);
  
  const [tarotList, setTarotList] = useState([]);
  const [count, setCount] = useState(0);
  const [id, setId] = useState([]);
  const [td, setTd] = useState([]);
  const { currenUser } = useContext(AuthContext);

  

  // useEffect(() => {
  //   const ran = test(tarotDeck);
  //   setTd(ran);
  // }, [])

  useEffect(()=>{
    const tarotRef = firebase.database().ref('TarotDB');

    tarotRef.on('value', (snapshot) => {
      const tarot = snapshot.val();
      const List = [] ;
      for (let i in tarot)
      {
          List.push({i, ...tarot[i] });

      }
      console.log(tarot[0].id)
      setTarotList(tarot);
      const ran = rand(List);
      setTd(ran);
  });

  },[])
  
  
  useEffect(() => {

    console.log(id);
    console.log(count);
    console.log('new' + Array.from(new Set(id)))

  }, [id])

  const rand = array => {
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

  
  function toggleDesc(prop) {

    if (count < 1) {
      setId([...id, prop]);
      setCount(count + 1);

    }
    else {
      alert("เลือกไพ่ครบ 1 ใบแล้ว");
    }
  }

  const handleSubmit = (e) => {
    // e.preventDefault();

    setShowTCD(false);
  }

  const tarotlist = td.map((tarot) => { 
    return <div ><img className="Tarot-size" src={BackTarot} key={tarot.id} onClick={() => { toggleDesc(tarot.id) }} />  </div>
  })

  const time = () =>{
        setTimeout(() => {
          console.log('This will run after 1 second!')
        }, 1000);
  }

  

  return (
    <>
      {currenUser ?(showTCD ? (
        <>
        {tarotlist}
        <button onClick={handleSubmit} >ทำนาย</button>
        </>
      ) : (
        <h1>
            <Show id={id} card={tarotList}></Show>
        </h1>
      ) ):(<Redirect to="/" />)
      
      }
    </>
  )
}
export default OneCard