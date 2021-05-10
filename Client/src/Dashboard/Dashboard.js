import React ,{useContext} from 'react';
import {Redirect} from "react-router-dom"
import {AuthContext} from '../Login/Auth'
import auth from '../firebase/config1';

const Dashboard = () =>{
      const {currenUser} = useContext(AuthContext);
      
      if (!currenUser) {
        return <Redirect to="/SignIn" />;
    }

    return (
        <div>
            <div className="container mt-5">
                <h1>Welcome</h1>
                <p>This is the dashboard, if you can see this you're logged in.</p>
                <button onClick={() => auth.auth().signOut()} class="btn btn-danger">Sign Out</button>
            </div>
        </div>
    )

}

export default Dashboard;