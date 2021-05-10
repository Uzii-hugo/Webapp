import React from 'react';
import {useHistory} from "react-router-dom"

function Dashboard() {
  const history = useHistory();

  // handle click event of logout button
  const handleLogout = () => {    
    history.push('/login');
  }

  return (
    <div>
      Welcome User!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;