import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

function Button(props) {

  return (
    <Link className="button button-primary" to={{
      pathname: '/showcontent', data: {
        id: props.id,
        details:props.details
      }
    }} >
      <i className="fa fa-chevron-right" ></i> Find out more
    </Link>
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

      <Button id={props.id} details={props.details}/>
    </div>
  );

}

function Card(props) {
  const { content, img, title, date } = props.details;

  return (
    <article className="card">
      <CardHeader category={ title} image={img} />
      <CardBody title={title} text={title} id={props.index} details={props.details} />
    </article>
  );
};

export default Card;