import React from 'react'
import { useState } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import { Link } from 'react-router-dom';
export default function Signup() {
    const[email ,setemail] = useState("");
const[password ,setpassword] = useState("");
const[firstname ,setfirst] = useState("");
const[lastname ,setlast] = useState("");
const[username ,setusername] = useState("");
const navigate = useNavigate();
const signup = async()=>{
  const userDate = {
    firstname,
    lastname ,
    username ,
    email ,
    password
  };
  try{
    const response = await fetch("http://localhost:5063/api/PreLogin/register" ,{
      method:"POST",
      headers:{
         "Content-Type":"application/json",
      },
      body:JSON.stringify(userDate)

    });
    if(!response.ok){
      const erromessage = await response.json();
      alert(erromessage.message || "Error occured");
    }
    else{
        console.log(userDate);
         alert("User created successfully");
         navigate("/signin")
    }
    
  } 
  catch(error){
    console.log(error);
    alert("Error occured");
  }
}

  return (
    <div className="signup">
    <div className="first">
        <h2>SIGN UP</h2>
        <input className="kya-hu"type="email" placeholder="Enter your First Name" onChange={(e)=>setfirst(e.target.value)}></input>
        <input className="kya-hu"type="email" placeholder="Enter your Last Name" onChange={(e)=>setlast(e.target.value)}></input>
        <input className="kya-hu"type="email" placeholder="Enter your UserName" onChange={(e)=>setusername(e.target.value)}></input>
        <input className="kya-hu"type="email" placeholder="Enter your Email" onChange={(e)=>setemail(e.target.value)}></input>
        <input type="password" className="kya-hu"placeholder="Enter your Password"onChange={(e)=>setpassword(e.target.value)}></input>
        <button className = "btnhuma"onClick={signup}>Create Account</button>
        <p>Have SOPclues Account? <Link to = "/signin">SIGN IN</Link></p>
       
    </div>
</div>
  )
}
