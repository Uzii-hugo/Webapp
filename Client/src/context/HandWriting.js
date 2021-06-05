import React, { useContext } from 'react';
import { Redirect } from "react-router-dom"
import { AuthContext } from '../Login/Auth'
function HandWriting() {
    const { currenUser } = useContext(AuthContext);

    if (!currenUser) {
        return <Redirect to="/SignIn" />;
    }
    return(
        <>
            <h1>ยังไม่พร้อมให้บริการครับ/ค่ะ</h1>
        </>
    )

}
export default HandWriting;