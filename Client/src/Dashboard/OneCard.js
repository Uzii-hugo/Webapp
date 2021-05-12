import React, {Component,useState} from 'react';
import TaroData from '../Data/TaroData'
import Tarot from './TarotCard'
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



const OneCard =() =>{

    const [tarotDeck, setTarotDeck] = useState([...TaroData]);
    
    
    // console.log(tarolist);
    
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

    const [td,setTd] = useState(test(tarotDeck));
    console.log(td);

    // const imageClick = () => {
    //     console.log('Click');
    //   } 

    function toggleDesc() {
            console.log("Click");
            
          }
    const tarotlist = td.map((tarot) =>
    { 
        
    return <img src = {tarot.image} key={tarot.id} onClick={toggleDesc} ></img> 
    })


    return(
        <>
         {tarotlist}
      
        </>
    )
}
export default OneCard