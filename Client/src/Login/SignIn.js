import React, { useContext, useState } from 'react';
import auth from '../firebase/config1';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth'

const SignIn = () => {
    const [check, setCheck] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {
            auth.auth().signInWithEmailAndPassword(email.value, password.value).catch(function (error) {
                // Handle Errors here.
                setCheck(false);
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });

        } catch (error) {
            alert(error);

        }
    }
    const { currenUser } = useContext(AuthContext);
    if (currenUser) {
        return <Redirect to="/" />
    }

    return (
        <>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <h1>เข้าสู่ระบบ</h1>
                    <div className="social-container">
                        <a className="social"><i className="fa fa-facebook-f"></i></a>
                        <a className="social"><i className="fa fa-google"></i></a>
                        <a className="social"><i className="fa fa-linkedin"></i></a>
                    </div>
                    {check ? (<></>):(<p>อีเมลหรือรหัสผ่านของคุณไม่ถูกต้อง</p>)}
                    <input type="email" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <a href="#">ลืมรหัสผ่าน?</a>
                    <button type="submit" >เข้าสู่ระบบ</button>
                    <NavLink activeClassName="active" to="/SignUp" > <i className="fa fa-chevron-right"></i>สมัครสมาชิก</NavLink>
                </form>
            </div>

        </>

    );

}

export default SignIn