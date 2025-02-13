import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import './Contact.css'
export default function CONTACT() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_txf1r5w', 'template_wgga57r', form.current, '7EVyKmTM2Uc7n2xF2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("Mail Sent Successffuly")
    };
  return (
    <div className="section1">
     <h2>LOVE TO HEAR FROM YOU GET IN TOUCH</h2>
    <hr></hr>
    <div className= "contact-hu">

    <form className = "form-hu" ref={form} onSubmit={sendEmail}>
               
      <input  type="text" placeholder="Enter Your Name" name="user_name" />
                
     
     
      <input  type="email" placeholder = "Enter your email" name="user_email" />
     
      
  
      <textarea name="message" placeholder="Enter Your Message" />
     
    
      <input className = "send-kar"type="submit" value="Send" />
    </form>
      <div className="form-hu1">
      <li><i class="fa-solid fa-envelope"></i> shrivastavaanupam46@gmail.com</li>
      <li><i class="fa-solid fa-phone"></i>+91 9971841732</li>
      <li><i class="fa-solid fa-location-dot"></i>Jaipur  ,Rajasthan</li>
      </div>
    </div>
   
    </div>
    
  )
}
