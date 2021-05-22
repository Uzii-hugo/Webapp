import React, { useState } from "react";


// const Context = React.createContext({})

// const Provider = ({ children }) =>{
//     const [tarotDeck, setTarotDeck] = useState([...TaroData]);
//     const [showTCD, setShowTCD] = useState(false);
//     const [modalShow, setModalShow] = useState(false);
//     const [modalCard, setModalCard] = useState([]);
//     const [displaySuit, setDisplaySuit] = useState([]);
//     const shuffle = array => {
//       let i = 0;
//       let j = 0;
//       let temp = null;
//       for (i = array.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//       return array;
//     };

//     const handleClose = () => setModalShow(false);

//     const handleShow = () => setModalShow(true);

//     const threeCardDraw = () => {
//         setTarotDeck(shuffle(tarotDeck));
//         if (showTCD === false) {
//           setShowTCD(true);  
//         } else {
//           setShowTCD(false);
//           setTimeout(()=> { // this is a hack to set state to false to force a re-render
//             setShowTCD(true)
//           }, 0);
//         };
//       };

//       const showTarotModal = displaycard => {
//         setModalCard(displaycard);
//         handleShow();
//       };

//       return (
//         <Context.Provider
//           value={{
//             tarotDeck,
//             showTCD,
//             threeCardDraw,
//             setDisplaySuit,
//             showTarotModal,
//             handleShow,
//             handleClose
//           }}
//         >
//           {children}
//         </Context.Provider>
//       );
// }
// export { Context, Provider };