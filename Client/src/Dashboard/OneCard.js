import React, { Component, useState, useEffect } from 'react';
import TaroData from '../Data/TaroData'
import Tarot from './TarotCard'
import BackTarot from '../img/BackToro.png'
// class OneCard extends Component{
//     constructor() {
//         super();

//         this.state = {
//           posts: {}
//         }
//       }

//       componentWillMount() {
//         this.setState({
//           posts: TaroData

//         });
//       }
//     render(){
//         console.log(this.componentWillMount);
//         console.log(this.state.posts);
//         return(
//             <>
//             hi one card
//             </>
//         )
//     }


// }



const OneCard = () => {

  const [tarotDeck, setTarotDeck] = useState([...TaroData]);
  const [count,setCount] = useState(0);
  const [id,setId] = useState([]);
  const [td, setTd] = useState([]);
  // console.log(tarolist);

  useEffect(() =>{
   const ran = test(tarotDeck);
   setTd(ran);
  },[])

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


  // console.log("td",td);

  // const imageClick = () => {
  //     console.log('Click');
  //   } 

  function toggleDesc(prop) {
    //  if(id.includes(prop) == false|| id.length == 0){
    setId([...id,prop]);
    // }
    // else {
    console.log(id)
    // }
    
    

  }
  const tarotlist = td.map((tarot) => {

    // return <img src = {tarot.image} key={tarot.id} onClick={toggleDesc} ></img> 
    return <div  ><img className="Tarot-size" src={BackTarot} key={tarot.id} onClick={() => {   toggleDesc(tarot.id) }  }/>  </div>
    
  })

  // const backTarot = () => {

  //  return <img className = "Tarot-size" src = {BackTarot}  onClick={toggleDesc} ></img>;}

  // console.log(id)
  return (
    <div className = "Main-backCard">
      
         {tarotlist} 


    </div>
  )
}
export default OneCard