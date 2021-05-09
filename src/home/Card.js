import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import PostsData from '../Data/PostsData';
function Button() {
  return(
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
  );
}

function CardHeader(props) {
  const { image } = props;
  var style = { 
      backgroundImage: 'url(' + image + ')',
  };
  return (
    <header style={style} id={image} className="card-header">
      <h4 className="card-header--title">New item</h4>
    </header>
  );

}

function CardBody(props) {
  return (
    <div className="card-body">
      <p className="date">March 20 2015</p>
      
      <h2>{props.title}</h2>
      
      <p className="body-content">{props.text}</p>
      
      <Button />
    </div>
  );
  
}

function Card(props) {
  const {category, image, title, text} = props.details;
  
  return (
      <article className="card">
        <CardHeader category={category} image={image}/>
        <CardBody title={title} text={text}/>
      </article>
    );
};

export default Card;