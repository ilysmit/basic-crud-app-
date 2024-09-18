import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  var mynavigate = useNavigate();

  const [username, setUsename] = React.useState();

  React.useEffect(() => {
    if (localStorage.getItem("uid")) {
      var name = localStorage.getItem("uname");
      setUsename(name);
    } else {
      mynavigate("/login");
    }
  }, []);
  const dologout = () => {
    localStorage.clear();
    mynavigate("./login");
  };
  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Hi , {username}</h3>
      <Link to='/changepassword'>Change Password</Link>
      <br/>
      <input type="button" value="Logout" onClick={dologout} />
    </div>
  );
}

export default Dashboard;
