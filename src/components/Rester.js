import React from 'react'
import './Rester1.css'
import repair from './repair.jpg'
export default function Rester() {
    
  return (
    <>
    <div className="conatiner-hu" style = {{backgroundImage: `url(${ repair})` ,backgroundRepeat:'no-repeat'  , width:'100%', 
  height:'30vh' ,backgroundSize:'cover'}}>
helloworld
    </div>
    </>
  )
}
