import React, {Component,useState} from 'react';
import TaroData from '../Data/TaroData'
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
    const tarolist = tarotDeck.map((taro) =><img src = { taro.image}></img> )
    console.log(tarotDeck);

    return(
        <>
         {tarolist}
      
        </>
    )
}
export default OneCard