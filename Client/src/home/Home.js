
import React, { Component,useEffect, useState } from 'react';
import PostsData from '../Data/PostsData'
import Card from './Card';
import firebase from '../firebase/config1'
import Image from '../img/background-1.png';

const Home = () =>{
  const [data, setData] = useState([]);
    
  useEffect (() => {

      const todoRef = firebase.database().ref('Todo');

      todoRef.on('value', (snapshot) => {
          const todos = snapshot.val();
          const todoList = [] ;
          for (let id in todos)
          {
              todoList.push({id, ...todos[id] });

          }
          setData(todoList);
          
      });
  }, [])

  return(
    
    
    <div>
      <img src = {Image} className ="banner"/>
     <div className ="ContainerCard"> <h1>New Content.</h1>
     {
        Object.keys(data).map(key => <Card key={key} index={key} details={data[key] } />)
     }  
    </div>  
    </div>

     
  )
}
export default Home;