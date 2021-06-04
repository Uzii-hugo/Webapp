import React, { useContext } from 'react';
import { Redirect } from "react-router-dom"
import { AuthContext } from '../Login/Auth'
import Tarot from './Tarot'

function PickUp() {
    const { currenUser } = useContext(AuthContext);

    if (!currenUser) {
        return <Redirect to="/SignIn" />;
    }


    return (
        <Tarot>

        </Tarot>
    )

}
export default PickUp;