import React from 'react';

const ShowContent =(props)=>{
    const { content, img, title, date} = props.location.data.details
    return(
        <>
            <h1>{ title}</h1>
            <img src={img}/>
            <span>{ date}</span>
            <p>{ content}</p>
        </>



    );
}
export default ShowContent