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

function Card() {
  // let list = PostsData.map((m) =>{
  //   return (
  //     <article className="card">
  //       <CardHeader image={m.image}/>
  //       <CardBody title={m.title} text={m.text}/>
  //     </article>
  //   );
  // });
  return (
      <article className="card">
        <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
        <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/>
      </article>
    );
};

export default Card;