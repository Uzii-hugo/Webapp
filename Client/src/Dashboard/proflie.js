import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../Login/Auth';
import firebase from '../firebase/ConfigB';
import { storage } from '../firebase/ConfigB';
import addprofile from '../firebase/configP';
function Proflie() {

    const { currenUser } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [profile, setProfile] = useState([]);
    const [img, setUrl] = useState("");
    const [image, setImage] = useState('');
    const [check, setCheck] = useState(true)
    const [progress, setProgress] = useState(0);
    useEffect(() => {

        const todoRef = firebase.database().ref('BlogDB');

        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });

            }
            setData(todoList);




        });
    }, [])

    useEffect(() => {
        const todoRef = firebase.database().ref('userDB');

        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });

            }
            setProfile(todoList);




        });

    }, [])

    



    const handleUpload = e => {
        const uploadTask = storage.ref(`profileImg/${image.name}`).put(image);
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
                        setCheck(false);
                    });
            }
        );
        


    }

    console.log("555" + img)
    const handleChangeImages = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };



    const block = data.map((uid) => {
        if (uid.uid == currenUser.uid) {
            return <p>{uid.title}</p>
        }

    })

    const pfile = profile.map((uid) => {
        if (uid.uid == currenUser.uid) {
            return <><h1>{uid.name} {uid.surname}</h1> <p>{uid.bd}</p></>
        }
    })
    return (
        <>
            <div>
                <div className="avatar">
                    {check ? (<img className="images" src="https://i.pinimg.com/originals/76/b3/51/76b351ffa72d83d305a255f0f7b80508.png" />) : (<img className="images" src={img} />)}

                    <input type="file" onChange={handleChangeImages} />

                </div>
                <button onClick={handleUpload}>Upload</button>
                <div className="container_box">
                    <div className="follower">
                        <p>ผู้ติดตาม: 80k คน</p>
                        <p>กำลังติดตาม: 10 คน</p>
                    </div>
                    <div className="container_profile">
                        {pfile}
                        <p>คำอธิบายตัวเอง...................</p>

                    </div>
                    <div className="container_profile">
                        <p>บทความ
                        </p>
                        {block}
                    </div>
                </div>
            </div>
        </>

    )
}
export default Proflie;