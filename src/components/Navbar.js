import React, { useEffect } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Navbar({length}) {
  const [clickhu ,clickhu1] = useState(false)
  function handleme(){
    clickhu1(!clickhu)
  }
  const {cart} = useSelector((state)=>{
    return state.carts;
  })
 const navigate = useNavigate();
 const handlecart = async()=>{
    const gettoken = localStorage.getItem("authtoken");
    if(!gettoken){alert("Sign in to continue");}
    else{
    const response = await fetch("https://localhost:7153/api/PostLogin/protected" ,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer " + localStorage.getItem("authtoken")
      }
    })
    const getresponse = await response.json();
    if(!response.ok){
      alert("Unknown error");
    }
    else{
      console.log("successfull");
      navigate("/Header");
    }
  }
 }

  
  return (
   <>
   <nav>
    <div className="left-hu">
    <i class="fa-sharp fa-solid fa-dumpster-fire"></i>
    <h4>SOP<span>Clues</span></h4>
    </div>
   
      <ul id = "navbar" className={clickhu === false ? "#navbar" : "#navbar active"}>
      <li className="nav-links"><Link to  = "/">HOME</Link></li>
      <li className="nav-links"><Link to = "/brands">BRANDS</Link></li>
      <li className="nav-links"><Link to = "/signin">SIGN IN</Link></li>
      <li className="nav-links"><Link to = "/contact">CONTACT</Link></li>
      
      <input className = "input-me"type="search" placeholder="Search for Products and Brands"></input>
      <li className="nav-links" onClick = {handlecart}><i class="fa-solid fa-cart-shopping" ><sup className="sup">{cart.length}</sup></i></li>
      <li className  = "nav-links" onClick={()=>{
        let login = localStorage.getItem('authtoken');
        if(login){
          localStorage.removeItem('authtoken')
          alert("Log out successfully")
          navigate("/");
        }
        
      }}><a className="po">LOG OUT</a></li>
    </ul>
    <div className="mobile" onClick={handleme}>
        <i className={clickhu === false? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
      </div>
      
   </nav>
  
   </>
  )
}
