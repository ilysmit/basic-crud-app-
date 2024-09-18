import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  var mynavigate = useNavigate();

  const submitData = () => {
    var myformdata = new FormData();
    myformdata.append("st_email", email);
    myformdata.append("st_password", password);
    axios
      .post("https://akashsir.in/myapi/crud/student-login-api.php", myformdata)
      .then((res) => {
        if (res.data.flag === "1") {
          //store Data in Local Storage
          localStorage.setItem("uid", res.data.st_id);
          localStorage.setItem("uname", res.data.st_name);
          localStorage.setItem("isLoggedin", true);
          Swal.fire("Login !!!!");
          mynavigate("/dashboard");
        } else {
          alert("Login Failed" + res.data.message);
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <br />
      Email :- <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <br />
      Password :-{" "}
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <input type="button" value="Login" onClick={submitData} />
    </>
  );
}

export default Login;
