import React, { useState,useContext } from 'react';
import firebase from '../firebase/config1';
import { storage } from "../firebase/ConfigB";
import { AuthContext } from '../Login/Auth';
import { Redirect } from "react-router-dom"


function CeateContent(){

    const [title, setTitle] = useState('');
    const [authur,setAuthur] = useState('');
    const [content,setcontent] = useState('');
    const [date,setDate] = useState('');
    
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [img, setUrl] = useState("");
    const { currenUser } = useContext(AuthContext);
    console.log(currenUser.uid);


    const handleSubmit = (e) => {
        e.preventDefault();

        const { text, content, authur, date} = e.target.elements;
        const title = text.value;
        const word = content.value;
        const name = authur.value;
        const dates = date.value;
      

        const todoRef = firebase.database().ref('BlogDB');
        const todo = {
            currenUser,
            title,
            word,
            name,
            dates

        }
        todoRef.push(todo)

    }
   

    const handleChangeImages = e => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };
    
      const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(img => {
                setUrl(img);
              });
          }
          );
        };

    return (
        <div>
           {currenUser ? (<>
           <from onSubmit={handleSubmit} >  
              <h1>Title</h1>
              <input type="text" placeholder="text" name="text" />
              <h1>Content</h1>
              <input type="text" placeholder="content" name="content" />
              <h1>Authur</h1>
              <input type="text" placeholder="authur" name="authur" />
              <h1>Date</h1>
              <input type="date" name="date" placeholder="DD/MM/YYYY" />
              <input type="file" onChange={handleChangeImages} />
              <progress value={progress} max="100" />
              <button onClick={handleUpload}>Upload</button>
              <button type="submit" >POST</button>
           
           </from>
            </>):( <Redirect to="/" />)
           }
        </div>
    )
}

export default CeateContent;