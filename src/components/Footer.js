import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
   <>
   <div className="foot-hu" id = "foo">
    <div className="part-one">
        <div className="about">
            <h3>About SOPClues</h3>
            <p>Careers</p>
            <p>Affiliates</p>
            <p>Supply Chain</p>
            <p>Wide Network</p>
        </div>
        <div className="sign-kar">
            <h3>SOPClues</h3>
            <p>Account</p>
            <p>Order Status</p>
            <p>Shopping Karo</p>
            <p>Rewards Bazzar</p>
        </div>
        <div className="help-kar">
            <h3>Help & FAQs</h3>
            <p>Online ordering</p>
            <p>Shipping</p>
            <p>Billing</p>
            <p>Customer Service</p>
        </div>
        <div className="shop-kar" id = "next">
            <h3>Ways To Shop</h3>
            <p>Just Arrived</p>
            <p>BestSellers</p>
            <p>Gift Cards</p>
            <p>Store Location</p>
        </div>
    </div>
    <hr></hr>
    <div className="low-hu">
    <div className="acha-hu">
        <h3>Sign up for SopClues Emails <span><input type="email" id="email" name="email" className="in-wal"/><button><i className="fa-sharp fa-solid fa-arrow-right"></i></button></span></h3> 
        </div>
    <div className="icons-wal" id = "h-hu">
    <li><i class="fa-brands fa-facebook"></i></li>
    <li><i class="fa-brands fa-instagram"></i></li>
    <li><i class="fa-brands fa-twitter"></i></li>
    <li><i class="fa-brands fa-youtube"></i></li>
    <li><i class="fa-brands fa-google-play"></i></li>
    </div>
    
    
    </div>
    <div className="copy-hu">
        <p>Copyright <i class="fa-regular fa-copyright"></i> 2023 Rajastha INDIA, INC.All Rights Reserved.<span>Terms of Use <i class="fa-sharp fa-solid fa-grip-lines-vertical"></i> Privacy Policy</span></p>
        <p>302020 Rajasthan (932329816)</p>
    </div>
   </div>
   </>
  )
}
