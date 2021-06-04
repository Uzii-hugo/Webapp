import React from 'react';

const ShowOneCard = (prop) => {

    const {id, card} = prop;
    console.log(card)
    console.log(card[0].img)
    //<img src= "https://storage.googleapis.com/login-tarot.appspot.com/" />
    
    return  (
        <>
          <div> 
            <img src={card[0].img}/> 
             <div> {card[id].name} </div>
             <div> {card[id].meaning}</div>  
          </div>
        </>
      )
}
export default ShowOneCard;