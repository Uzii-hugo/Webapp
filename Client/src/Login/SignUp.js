import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {NavLink,Redirect} from 'react-router-dom';
import auth from '../firebase/config1';


const SignUp =() => {
    
    const [currenUser, setCurrenUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try{
            const response = auth.auth().createUserWithEmailAndPassword(email.value,password.value);
            console.log(response);
            setCurrenUser(true);
        }catch(error){
            alert(error);
        }
    }

    if (currenUser) {
        return <Redirect to="/" />
    }
        return(
            <>
            <div className="login">
            <form onSubmit = {handleSubmit}>
                <h1>สมัครสมาชิก</h1>
                <ul className="social-container">
                    <li><i className="fa fa-facebook-f"></i></li>
                    <li><i className="fa fa-google"></i></li>
                    <li><i className="fa fa-linkedin"></i></li>
                </ul>
                <input type="name" name = "Name"placeholder="Name" />
                <input type="sername" name = "Sername"placeholder="Sername" />
                <input type="number" name = "Phone Number"placeholder="Phone Number" />
                <input type="date" name = "birthday"placeholder="DD/MM/YYYY" />
                <input type="email" name = "email"placeholder="Email" />
                <input type="password" name ="password" placeholder="Password" />
                <a href="#">ลืมรหัสผ่าน?</a>
                <button type="submit">สมัครสมาชิก</button>
                 <NavLink activeClassName="active" to="/SignIn" > <i className="fa fa-chevron-right"></i>เข้าสู่ระบบ</NavLink>
            </form>
        </div>
        </>
        )
}

export default SignUp