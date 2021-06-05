import React from 'react';

const ShowContent = (props) => {
    const { content, img, title, date } = props.location.data.details
    return (
        <div className='content'>
            <article>
                <h1 className='title'>{title}</h1>
                <img src={img} />
                <span>{date}</span>
                <p>{content}</p>
            </article>
        </div>



    );
}
export default ShowContent