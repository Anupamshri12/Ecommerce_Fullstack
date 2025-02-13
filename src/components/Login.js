import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Login() {

const[username ,setusername] = useState("");
const[password ,setpassword] = useState("");
const navigate = useNavigate();

const hasAlerted = useRef(false); 

useEffect(() => {
    const token = localStorage.getItem("authtoken");
    if (token && !hasAlerted.current) {
        hasAlerted.current = true; 
        alert("Already signed in");
        navigate("/");
    }
}, [navigate]);
const signin = async()=>{
  const getdata = {
    username,
    password
  };
   try{
    const response = await fetch("https://localhost:7153/api/PreLogin/Login" ,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(getdata)
    });
    const getresponse= await response.json();
    if(!response.ok){
      
      alert(getresponse.message);
    }
    else{
      localStorage.setItem("authtoken",getresponse.token);
      alert("Successfully signed in");
      navigate("/");
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
            <h2>ENTER YOUR CREDENTIALS</h2>
            <input className="kya-hu"type="email" placeholder="Enter your UserName" onChange={(e)=>setusername(e.target.value)}></input>
            <input type="password" className="kya-hu"placeholder="Enter your Password"onChange={(e)=>setpassword(e.target.value)}></input>
            <button className = "btnhuma"onClick={signin}>Sign In</button>
            <p>Don't have an Account? <Link to = "/signup">SIGN UP</Link></p>
        </div>
    </div>
  )
}
