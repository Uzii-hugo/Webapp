import React from 'react';

const ShowOneCard = (prop) => {

    const {id, card} = prop;
    console.log(card)
    
    return  (
        <>
          <div> 
             <div> {card[id].name} </div>
             <div> {card[id].meaning}</div>  
          </div>
        </>
      )
}
export default ShowOneCard;