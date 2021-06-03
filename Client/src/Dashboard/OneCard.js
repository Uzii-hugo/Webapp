import React, { Component, useState, useEffect } from 'react';
import TaroData from '../Data/TaroData'
import BackTarot from '../img/BackToro.png'
import Show from './ShowOneCard';

const OneCard = () => {
  const [showTCD, setShowTCD] = useState(true);
  const [tarotDeck, setTarotDeck] = useState([...TaroData]);
  const [count, setCount] = useState(0);
  const [id, setId] = useState([]);
  const [td, setTd] = useState([]);

  useEffect(() => {
    const ran = test(tarotDeck);
    setTd(ran);
  }, [])

  useEffect(() => {
    console.log(id);
    console.log(count);
    console.log('new' + Array.from(new Set(id)))

  }, [id])

  const test = array => {
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

  return (
    <>
      {showTCD ? (
        <>
        {tarotlist}
        <button onClick={handleSubmit} >ทำนาย</button>
        </>
      ) : (
        <p>
          <Show id={id} card={TaroData}></Show>
        </p>
      )
      }
      

    </>
  )
}
export default OneCard