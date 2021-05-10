import React, { useState } from "react";
import TaroData from "./Data/TaroData.json";

const Context = React.createContext({})

const Provider = ({ children }) =>{
    const [tarotDeck, setTarotDeck] = useState([...TaroData]);

    const threeCardDraw = () => {
        setTarotDeck(shuffle(tarotDeck));
        if (showTCD === false) {
          setShowYNQ(false);
          setShowYNA(false);
          setShowETT(false);
          setShowTCD(true);  
        } else {
          setShowTCD(false);
          setTimeout(()=> { // this is a hack to set state to false to force a re-render
            setShowTCD(true)
          }, 0);
        };
      };

      const showTarotModal = displaycard => {
        setModalCard(displaycard);
        handleShow();
      };

      return (
        <Context.Provider
          value={{
            tarotDeck,
            showTCD,
            showYNQ,
            showYNA,
            showETT,
            threeCardDraw,
            showTarotModal
          }}
        >
          {children}
        </Context.Provider>
      );
}
export { Context, Provider };