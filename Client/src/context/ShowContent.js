import React from 'react';
import Center from 'react-center';
const ShowContent = (props) => {

    const { content, img, title, date, authur } = props.location.data.details;
    return (
        <Center>
            <div className='content'>
                <h1>{title}</h1>
                <Center>
                    <img src={img} />
                </Center>
                <span>วันที่เผยแพร่: {date}</span>
                <span>ผู้เขียน: {authur}</span>
                <article>
                    <p>{content}</p>
                </article>
            </div>
        </Center>



    );
}
export default ShowContent