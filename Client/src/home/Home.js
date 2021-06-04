
import React, { Component,useEffect, useState } from 'react';
import PostsData from '../Data/PostsData'
import Card from './Card';
import Image from '../img/Astrology.png';
import firebase from '../firebase/config1'

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
    <>
    { 
    Object.keys(data).map(key => <Card key={key} index={key} details={data[key]} />)
    } 
    </>
  )
}
export default Home;