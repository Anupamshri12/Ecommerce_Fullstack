import React from 'react'
import f21 from './f21.avif'
import './Middle1.css'
import s1 from './s1.avif'
import p3 from './p3.jpg'
export default function Middle() {
  return (
   <>
   <div className="container">
    <h1>DEALS OF THE <span>DAY</span></h1>
    <div className="cards">
        <div className = "card card1">
            <img src = {f21} alt = ".."></img>
            <div className="con">
            <p>Get under <h2><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i><span className="span1">999</span></h2></p>
            <button className=" btn-h">SHOP CLOTHING</button>
            </div>
            
        </div>
        <div className = "card card2">
            <img src = {s1} alt = ".."></img>
            <div className="con">
            <p>Flat 40% Off </p>
            <button className=" btn-h">SHOP FOOTWEARS</button>
            </div>
        </div>
        <div className = "card card3">
            <img src = {p3} alt = ".."></img>
            <div className="con">
            <p>STARTING FROM <h2><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i><span>399</span></h2></p>
            <button className=" btn-h">SHOP T-SHIRTS</button>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}
