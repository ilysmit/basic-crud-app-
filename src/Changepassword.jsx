import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Changepassword() {

    const[opass,setOldPdassword] = React.useState("");
    const[npass,setNewPdassword] = React.useState("");
    const[cpass,setConfirmPdassword] = React.useState("");
    
    var mynevigat = useNavigate()

    React.useEffect(()=>{
        if(!localStorage.getItem("uid")){
            mynevigat("/login")
        }
    })

    const submitData = () =>{

        var myformdata  = new FormData();
        var uid = localStorage.getItem("uid")
        myformdata.append("st_id",uid)
        myformdata.append("opass",opass)
        myformdata.append("npass",npass)
        myformdata.append("cpass",cpass)
        
        axios.post("https://akashsir.in/myapi/crud/student-change-password-api.php",myformdata)
        .then((res)=>{
            if(res.data.flage === '1'){
                alert(res.data.message)
            }
            else{
                alert(res.data.message)
            }
        }).catch(err=>alert(err))

    }
  return (
    <>
    <h1> Password Change </h1>
    Old password :- <input type="text" onChange={(e)=>setOldPdassword(e.target.value)}/>
    New password :- <input type="text" onChange={(e)=>setNewPdassword(e.target.value)}/>
    Confirm password :- <input type="text" onChange={(e)=>setConfirmPdassword(e.target.value)}/>
    <input type="button" value="Change Password"  onClick={submitData}/>
    </>
  )
}

export default Changepassword
