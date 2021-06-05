import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink, Redirect } from 'react-router-dom';
import auth from '../firebase/ConfigB';


const SignUp = () => {

    const [currenUser, setCurrenUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, Name, Surname, birthday, PhoneNumber } = e.target.elements;

        try {
            auth.auth().createUserWithEmailAndPassword(email.value, password.value).then(id => {
                const uid = id.user.uid;
                const name = Name.value;
                const surname = Surname.value;
                const bd = birthday.value;
                const pn = PhoneNumber.value;
                const todoRef = auth.database().ref('userDB');
                const todo = {
                    uid,
                    name,
                    surname,
                    bd,
                    pn

                    //complete: false
                }
                todoRef.push(todo)
                setCurrenUser(true);
             })


        } catch (error) {
            alert(error);
        }
    }

    if (currenUser) {
        return <Redirect to="/" />
    }
    return (
        <>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <h1>สมัครสมาชิก</h1>
                    <ul className="social-container">
                        <li><i className="fa fa-facebook-f"></i></li>
                        <li><i className="fa fa-google"></i></li>
                        <li><i className="fa fa-linkedin"></i></li>
                    </ul>
                    <input type="name" name="Name" placeholder="Name" />
                    <input type="surname" name="Surname" placeholder="Surname" />
                    <input type="number" name="PhoneNumber" placeholder="Phone Number" />
                    <input type="date" name="birthday" placeholder="DD/MM/YYYY" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <a href="#">ลืมรหัสผ่าน?</a>
                    <button type="submit">สมัครสมาชิก</button>
                    <NavLink activeClassName="active" to="/SignIn" > <i className="fa fa-chevron-right"></i>เข้าสู่ระบบ</NavLink>
                </form>
            </div>
        </>
    )
}

export default SignUp