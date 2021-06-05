import React from 'react';
import Center from 'react-center';
const ShowOneCard = (prop) => {

  const { id, card } = prop;
  // console.log(card)
  // console.log(card[0].img)
  //<img src= "https://storage.googleapis.com/login-tarot.appspot.com/" />

  return (
    <>
      <div>
        <Center>
          <img src={card[0].img} />
        </Center>
        <h3> {card[id].name} </h3>
        <article>ความหมายของไพ่:
               <p> {card[id].meaning}</p>
        </article>
      </div>
    </>
  )
}
export default ShowOneCard;