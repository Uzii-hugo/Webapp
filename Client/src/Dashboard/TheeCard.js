import React, { useContext, useState, useEffect } from 'react';
import TaroData from '../Data/TaroData'
import BackTarot from '../img/BackToro.png'
import { AuthContext } from '../Login/Auth'
import Show from '../context/ShowTheeCard';
import { Redirect } from "react-router-dom"

const TheeCard = () => {
    const { currenUser } = useContext(AuthContext);
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

        if (count < 3) {
            setId([...id, prop]);
            setCount(count + 1);

        }
        else {
            alert("เลือกไพ่ครบ 3 ใบแล้ว");
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
            {currenUser ? (showTCD ? (
                <>
                    {tarotlist}
                    <button onClick={handleSubmit} >ทำนาย</button>
                </>
            ) : (
                <h1>
                    <Show id={id} card={TaroData}></Show>
                </h1>
            )) : (<Redirect to="/" />)

            }
        </>
    )
}
export default TheeCard