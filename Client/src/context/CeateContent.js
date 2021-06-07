import React, { useState, useContext,useEffect } from 'react';
import firebase from '../firebase/ConfigB';
import { storage } from "../firebase/ConfigB";
import { AuthContext } from '../Login/Auth';
import { Redirect } from "react-router-dom"


function CeateContent() {

  const [title, setTitle] = useState('');
  const [authur, setAuthur] = useState('');
  const [content, setcontent] = useState('');
  const [date, setDate] = useState('');

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [img, setUrl] = useState("");
  const { currenUser } = useContext(AuthContext);
  



  
 
  const hadleOnChangTitle = (e) => {
    setTitle(e.target.value);
  }

  const hadleOnChangContent = (e) => {
    setcontent(e.target.value);
  }

  const hadleOnChangAuthur = (e) => {
    setAuthur(e.target.value);
  }

  const hadleOnChangDate = (e) => {
    setDate(e.target.value);
  }

  const creatTodo = () => {
    const todoRef = firebase.database().ref('BlogDB');
    const uid = currenUser.uid;
    const todo = {
        uid,
        title,
        date,
        authur,
        content,
        img

        
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
      {currenUser ? (
        <from  >
          <h1>Title</h1>
          <input type="text" placeholder="text" name="text" onChange={hadleOnChangTitle} value={title} />
          <h1>Content</h1>
          <input type="text" placeholder="word" name="content" onChange={hadleOnChangContent} value={content} />
          <h1>Authur</h1>
          <input type="text" placeholder="name" name="authur" onChange={hadleOnChangAuthur} value={authur} />
          <h1>Date</h1>
          <input type="date" name="dates" placeholder="DD/MM/YYYY" onChange={hadleOnChangDate} value={date} />
          <input type="file" onChange={handleChangeImages} />
          <progress value={progress} max="100" />
          <button onClick={handleUpload}>Upload</button>
          <button onClick={creatTodo} >POST</button>
        </from>) : (<Redirect to="/" />)
      }
    </div>
  )
}

export default CeateContent;