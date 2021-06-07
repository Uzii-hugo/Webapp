import React from 'react';
import Center from 'react-center';
const ShowContent = (props) => {
    const { content, img, title, date } = props.location.data.details;
    return (
        <Center>
        <div className='content'>
            
                <h1>{title}</h1>
                <Center>
                <img src={img} />
                </Center>
                <span>วันที่เผยแพร่: {date}</span>
            <article>
                <p>{content}</p>
            </article>
        </div>
        </Center>



    );
}
export default ShowContent