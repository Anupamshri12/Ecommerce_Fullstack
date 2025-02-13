import React from 'react'
import './Section1.css'
import zara1 from'./zara1.jpg';
import { HashLink as Link } from 'react-router-hash-link';
export default function Section() {
  return (
    <>
    <div className="section-hu">
   <img className = "img1"src = {zara1} alt = "..."></img>
   <div className="header1">
    <h2>BRANDS WITH BEST DEALS</h2>
    <p>International And Acaudal</p>

    <button className="button-hu1"><Link to = '#near' smooth>Shop Now</Link></button>
   </div>
    </div>
    </>
  )
}
