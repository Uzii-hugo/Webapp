import React, { useState,useContext } from 'react';
import firebase from '../firebase/config1';
import { storage } from "../firebase/ConfigB";
import { AuthContext } from '../Login/Auth'


function CeateContent(){

    const [title, setTitle] = useState('');
    const [authur,setAuthur] = useState('');
    const [content,setcontent] = useState('');
    const [date,setDate] = useState('');
    
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [img, setUrl] = useState("");
    const { uid } = useContext(AuthContext);
    console.log(uid)

    const hadleOnChangTitle = (e) => {
        setTitle(e.target.value);
        ;
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
        const todo = {
            uid,
            title,
            date,
            authur,
            content,
            img

            //complete: false
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
             Title  
            <input type='text' onChange= {hadleOnChangTitle} value={title}/>
            <br />
            Content 
            <input type='text' onChange= {hadleOnChangContent} value={content}/>
            <br />
            Authur 
            <input type='text' onChange= {hadleOnChangAuthur} value={authur}/>
            <br />
            Date 
            <input type='text' onChange= {hadleOnChangDate} value={date}/>
            <br />
            
            <br />
            <br />
            <progress value={progress} max="100" />
            <br />
            <br />
            <input type="file" onChange={handleChangeImages} />
            <button onClick={handleUpload}>Upload</button>
            <br />
            <button className='post-btn' onClick={creatTodo}>POST</button>
            {img}

            {/* <input type='text' onChange= {hadleOnChangName} value={title}/>
            <input type='text' onChange= {hadleOnChangText} value={text}/> */}
            
        </div>
    )
}

export default CeateContent;