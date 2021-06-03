import React from 'react';

const Present = (prop) => {
    const { id, card } = prop;
    return (
        <div>
            <img className="Tarot-size" src={card[id[0]].image} />
            <div> {card[id[0]].present}</div>
        </div>
    );
}

const Past = (prop) => {
    const { id, card } = prop;
    return (
        <div>
            <img className="Tarot-size" src={card[id[1]].image} />
            <div> {card[id[1]].past}</div>
        </div>
    );
}

const Future = (prop) => {
    const { id, card } = prop;
    return (
        <div>
            <img className="Tarot-size" src={card[id[2]].image} />
            <div> {card[id[2]].future}</div>
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
            <div>
                <Present id={id} card={card} />
                <Past id={id} card={card} />
                <Future id={id} card={card} />
            </div>
        </>
    )
}
export default ShowTheeCard;