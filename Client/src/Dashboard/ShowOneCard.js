import React from 'react';

const ShowOneCard = (prop) => {

    const {id, card} = prop;
    console.log(card[id].image)
    
    return  (
        <>
          <div> 
              <img className="Tarot-size" src={card[id].image} /> 
              <div> {card[id].general}</div>
          </div>
        </>
      )
}
export default ShowOneCard;