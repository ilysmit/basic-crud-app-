import axios from "axios";
import React from "react";
import Swal from 'sweetalert2'

function Signup() {
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobileno, setMobileno] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitData = () => {
    var myformdata =  new FormData();
    myformdata.append("st_name",name)
    myformdata.append("st_gender",gender)
    myformdata.append("st_email",email)
    myformdata.append("st_mobileno",mobileno)
    myformdata.append("st_password",password)

    
    axios.post("https://akashsir.in/myapi/crud/student-add-api.php",myformdata)
    .then((res)=>{
        if(res.flag==="1"){
           alert(res.data.message)
        }else{
            alert(res.data.message)
        }

    }).catch(err=>alert(err))
    
  };
  return (
    <>
      <h1>Sign Up Page</h1>
      Name :- <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      Gender :- Male
      <input
        type="radio"
        name="rd"
        onChange={(e) => setGender(e.target.value)}
      />
      Female{" "}
      <input type="radio" name="rd" onChange={(e) => setGender(e.target.value)} />
      <br />
      Email :- <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <br />
      Mobile Number :-{" "}
      <input type="text" onChange={(e) => setMobileno(e.target.value)} />
      <br />
      Password :-{" "}
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <input type="button" value="Sign up" onClick={submitData} />
    </>
  );
}

export default Signup;
