import React, { useContext, useState, useEffect } from 'react';
import TaroData from '../Data/TaroData';
import BackTarot from '../img/BackToro.png';
import firebase from '../firebase/config1';
import { AuthContext } from '../Login/Auth';
import Show from '../context/ShowTheeCard';
import { Link, Redirect } from "react-router-dom";
import Center from 'react-center';

const TheeCard = () => {
    const { currenUser } = useContext(AuthContext);
    const [showTCD, setShowTCD] = useState(true);
    const [tarotDeck, setTarotDeck] = useState([...TaroData]);
    const [tarotList, setTarotList] = useState([]);
    const [count, setCount] = useState(0);
    const [id, setId] = useState([]);
    const [td, setTd] = useState([]);
    const [check,setCheck] = useState(false);

    useEffect(() => {
        const tarotRef = firebase.database().ref('TarotPPF');
        tarotRef.on('value', (snapshot) => {
            const tarot = snapshot.val();
            const List = [];
            for (let i in tarot) {
              List.push({ i, ...tarot[i] });
      
            }
           
            setTarotList(tarot);
            const ran = rand(List);
            setTd(ran);
          });


        }, [])

        



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
            
            if (count < 3) {
                setId([...id, prop]);
                setCount(count + 1);
                setCheck(true);

            }
            else if(count > 3){
                alert("เลือกไพ่ยิปซีครบ 3 ใบแล้ว");
            }
            else {
                alert("เลือกไพ่ยิปซียังไมครบ 3 ใบ")
            }
        }

        const handleSubmit = (e) => {
            // e.preventDefault();
            if(check && count == 3){
                setShowTCD(false);
              }
              else{
                alert("โปรดเลือกไพ่ยิปซี 3 ใบ")
              }
        }

        const tarotlist = td.map((tarot) => {
            return <img className="backCard_img" src={BackTarot} key={tarot.id} onClick={() => { toggleDesc(tarot.id) }} />
        })

        return (
            <>
                {currenUser ? (showTCD ? (
                    <div className="backCard_con">
                        <h2>ดูดวงด้วยไพ่ยิปซี</h2>
                        <p>อดีต ปัจจุบัน อนาคตของคุณเป็นอย่างไรบ้าง</p>
                        <p>ตั้งสมาธิให้มั่น แล้วใช้มือซ้าย เลือกไพ่ใบเดียว แล้วไพ่จะบอกสิ่งที่จะเกิดขึ้นในวันนี้ให้คุณทราบ</p>
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
                                <Show id={id} card={tarotList}></Show>
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
export default TheeCard