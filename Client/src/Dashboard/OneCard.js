import React, { useState, useEffect, useContext } from 'react';
import TaroData from '../Data/TaroData';
import BackTarot from '../img/BackToro.png';
import firebase from '../firebase/config1';
import Show from '../context/ShowOneCard';
import { AuthContext } from '../Login/Auth';
import {Link, Redirect } from "react-router-dom";
import Load from './Loading';
import Center from 'react-center';


const OneCard = () => {
  const [showTCD, setShowTCD] = useState(true);
  const [tarotDeck, setTarotDeck] = useState([...TaroData]);
  const [check,setCheck] = useState(false);

  const [tarotList, setTarotList] = useState([]);
  const [count, setCount] = useState(0);
  const [id, setId] = useState([]);
  const [td, setTd] = useState([]);
  const { currenUser } = useContext(AuthContext);
  const [theecard,setTheecard] = useState([]);



  // useEffect(() => {
  //   const ran = test(tarotDeck);
  //   setTd(ran);
  // }, [])

  useEffect(() => {
    const tarotRef = firebase.database().ref('TarotDB');

    tarotRef.on('value', (snapshot) => {
      const tarot = snapshot.val();
      const List = [];
      for (let i in tarot) {
        List.push({ i, ...tarot[i] });

      }
      console.log(tarot[0].id)
      setTarotList(tarot);
      const ran = rand(List);
      setTd(ran);
    });

  }, [])

  useEffect(()=>{
    const tarotRef = firebase.database().ref('TarotPPF');
    tarotRef.on('value', (snapshot) => {
        const tarot = snapshot.val();
        const List = [];
        for (let i in tarot) {
          List.push({ i, ...tarot[i] });
  
        }
        console.log(tarot[0].id)
        setTheecard(tarot);
      });

  },[])


  // useEffect(() => {

  //   console.log(id);
  //   console.log(count);
  
  // }, [id])

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
    setCheck(true);
    if (count < 1) {
      setId([...id, prop]);
      setCount(count + 1);

    }
    else {
      alert("เลือกไพ่ยิปซีครบ 1 ใบแล้ว");
    }
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    if(check){
      setShowTCD(false);
    }
    else{
      alert("โปรดเลือกไพ่ยิปซี 1 ใบ")
    }
    
  }

  const tarotlist = td.map((tarot) => {
    return <img className="backCard_img" src={BackTarot} key={tarot.id} onClick={() => { toggleDesc(tarot.id) }} />
  })

  

  return (
    <>
      {currenUser ? (showTCD ? (
        <div className="backCard_con">
          <h2>ดูดวงรายวันด้วยไพ่ยิปซี</h2>
          <p>วันนี้มีอะไร?</p>
          <p>มาดูกันซิว่าดวงคุณวันนี้เป็นยังไงบ้าง ตั้งสมาธิให้มั่น แล้วใช้มือซ้าย เลือกไพ่ใบเดียว แล้วไพ่จะบอกสิ่งที่จะเกิดขึ้นในวันนี้ให้คุณทราบ</p>
          <p className="center">คุณได้เลือก {count} ใบ</p>
          <div className="backCard">
            {tarotlist}
          </div>
          <button onClick={handleSubmit} >ทำนาย</button>
        </div>
      ) : (
        <>
          <Center>
            <div className="singleCard">
              <h1>คำทำนาย</h1>
              <Show id={id} card={tarotList} thee={theecard}></Show>
            </div>
          </Center>
          <div className="backCard_con">
            <Link to="/PickUp" >
              <button>กลับ</button>
            </Link>
          </div>
        </>
      )) : (<Redirect to="/" />)

      }
    </>
  )
}
export default OneCard