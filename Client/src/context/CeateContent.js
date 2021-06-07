import React, { useState, useContext, useEffect } from 'react';
import firebase from '../firebase/ConfigB';
import { storage } from "../firebase/ConfigB";
import { AuthContext } from '../Login/Auth';
import { Redirect } from "react-router-dom";
import Center from 'react-center';



function CeateContent() {

  const [title, setTitle] = useState(' ');
  const [authur, setAuthur] = useState(' ');
  const [content, setcontent] = useState(' ');
  const [date, setDate] = useState(' ');

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [img, setUrl] = useState(" ");
  const { currenUser } = useContext(AuthContext);
  const [check, setCheck] = useState(false);


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

  const creatTodo = (e) => {
    e.preventDefault();

    if (title.length > 0 && authur.length > 0 && content > 0 && date.length > 0) {
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
      todoRef.push(todo);

      alert("บทความของคุณถูกโพสต์เรียบร้อยแล้ว");
      setCheck(true);

    }
    else{
      alert("ข้อมูลของคุณไม่ครบถ้วน โปรดตรวจสอบอีกครั้ง");
    }


  }
  if (check) {
    return <Redirect to="/" />
  }

  const handleChangeImages = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
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
      <Center>
        {currenUser ? (
          <form className="form">
            <h2>สร้างบทความ</h2>
            <div>
              <h3>Title</h3>
              <input type="text" placeholder="text" name="text" onChange={hadleOnChangTitle} value={title} />
            </div>
            <div>
              <h3>Date</h3>
              <input type="date" name="dates" placeholder="DD/MM/YYYY" onChange={hadleOnChangDate} value={date} />
            </div>
            <div>
              <h3>Authur</h3>
              <input type="text" placeholder="name" name="authur" onChange={hadleOnChangAuthur} value={authur} />
            </div>
            <div>
              <h3>Content</h3>
              <textarea type="text" rows="10" cols="80" placeholder="description" name="content" onChange={hadleOnChangContent} value={content} />
            </div>
            <div>
              <input className="files" type="file" onChange={handleChangeImages} />
              <progress value={progress} max="100" />
            </div>
            <Center>
              <button onClick={handleUpload}>Upload</button>
              <button onClick={creatTodo} >POST</button>
            </Center>
          </form>) : (<Redirect to="/" />)
        }
      </Center>
    </div>
  )
}

export default CeateContent;