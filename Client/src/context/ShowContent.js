import React from 'react';

const ShowContent =(props)=>{
    const { category, image, title, text } = props.location.data.details
    return(
        <>
            <h1>{ image}</h1>
            <h1>{ category}</h1>
            <h1>{ title}</h1>
            <h1>{ text}</h1>
        </>



    );
}
export default ShowContent