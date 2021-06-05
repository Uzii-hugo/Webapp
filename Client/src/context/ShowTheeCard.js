import React from 'react';
import Center from 'react-center';
const Present = (prop) => {
    const { id, card } = prop;
    return (
        <div className = "multiCard_dom">
            <Center>
            <img src={card[id[1]].image} />
            </Center>
            <h3> {card [id[1]].name} </h3>
            <article> ปัจจุบัน:
                <p>{card[id[1]].present}</p>
            </article>
        </div>
    );
}

const Past = (prop) => {
    const { id, card } = prop;
    return (
        <div className = "multiCard_dom">
            <Center>
            <img src={card[id[0]].image} />
            </Center>
            <h3> {card [id[0]].name} </h3>
            <article> อดีต:
                <p>{card[id[0]].past}</p>
            </article>
        </div>
    );
}

const Future = (prop) => {
    const { id, card } = prop;
    return (
        <div className = "multiCard_dom">
            <Center>
            <img src={card[id[2]].image} />
            </Center>
            <h3> {card [id[2]].name} </h3>
            <article> อนาคต:
                <p>{card[id[2]].future}</p>
            </article>
        </div>
    );
}

const ShowTheeCard = (prop) => {

    const { id, card } = prop;
    console.log("id" + id[2])
    console.log(card[id[0]].image)
    console.log(card[id[1]].image)
    console.log(card[id[2]].image)

    return (
        <>
            <div className = "multiCard">
                <Past id={id} card={card} />
                <Present id={id} card={card} />
                <Future id={id} card={card} />
            </div>
        </>
    )
}
export default ShowTheeCard;