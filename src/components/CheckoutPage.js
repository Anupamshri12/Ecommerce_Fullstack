import React from 'react'
import { useState } from 'react';
import "./Login.css"
import { json, useNavigate } from 'react-router-dom';
import './CheckoutPage.css'
import { Link } from 'react-router-dom';
import { ToastContainer ,toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
export default function Signup() {
   const [address ,setaddress] = useState("");
   const[email ,setemail] = useState("");
   const[number ,setnumber] = useState("");
   const [otp ,setotp] = useState("");
   const navigate= useNavigate();
   const emailbody = {
    email
   };
   
   const sendotp = async()=>{
      var response = await fetch("http://localhost:5063/api/PostLogin/emailsender" ,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer " + localStorage.getItem("authtoken")
        },
        body:JSON.stringify(emailbody)
      })
      if(email == ""){
        toast.error("Invalid email", {
          duration: 2000,
          position: "center",
          style: {
            background: "rgb(255, 45, 45)",
            color: "black",
            fontWeight: "bold",
          },
          
        });
      }
      else{
      const jsonresponse = await response.text();
      if(!response.ok){
        console.log(jsonresponse)
       
      }
      else{
        toast.success("OTP SENT", {
          duration: 2000,
          position: "center",
          style: {
            background: "rgb(189, 255, 181)",
            color: "black",
            fontWeight: "bold",
          },
          
        });
      }
    }
   }
   const body = {
     otp
   };
   const onsubmit = async(e)=>{
      e.preventDefault();
       var respone = await fetch("http://localhost:5063/api/PostLogin/checkotp " ,{
         method:"POST",
         headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer " + localStorage.getItem("authtoken")
         },
         body:JSON.stringify(body)
       })
       var jsonresponse = await respone.text();
       if(!respone.ok){
         toast.error("Invalid OTP", {
          duration: 2000,
          position: "center",
          style: {
            background: "rgb(255, 45, 45)",
            color: "black",
            fontWeight: "bold",
          },
          
        });
        console.log(jsonresponse)
       }
       else{
        toast.success("🎉 Order placed successfully!", {
          duration: 2000,
          position: "top-center",
          style: {
            background: "rgb(184, 107, 255)",
            color: "#fff",
            fontWeight: "bold",
          },
          icon: "🚀",
        });
        setTimeout(() => navigate("/"), 1000);
      }
       
       
   }
  return (
    <div className="checkout">
    <h2 style={{fontWeight:"600" ,fontFamily:"sans-serif"}}>CHECKOUT</h2>
    <hr></hr>
    <form className = "place-order">
        
        <input className="first-name"type="address" placeholder="Enter your shipping address" onChange={(e)=>setaddress(e.target.value)}></input>
        <input className="first-name"type="email" placeholder="Enter your email"  onChange={(e)=>setemail(e.target.value)}></input>
        <input className="first-name"type="text" placeholder="Enter your Mobile Number"  onChange={(e)=>setnumber(e.target.value)}></input>

        <label className = "first-name"for="cars" style={{fontFamily:"revert-layer",fontWeight:"500"}}>PAYMENT TYPE:</label>
        <select id="cars" name="cars" size="3">
          <option value="COD">Cash on Delivery</option>
          <option value="saab">EMI</option>
          <option value="fiat">Online Payment</option>
        </select>
        <input className="first-name"type="text" placeholder="Enter your OTP for verification"  onChange={(e)=>setotp(e.target.value)}></input>
        <div className='new-sender'>
        <button id = "otp-button"className='first-name' style={{fontFamily:"inherit"}} type = "button" onClick={sendotp}>SEND OTP</button>
        <button id = "place-button"className='first-name' style={{fontFamily:"inherit"}} onClick={onsubmit} >PLACE ORDER</button>
        </div>
        

        </form>
     </div>
   
  )
}
