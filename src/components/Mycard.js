import React from 'react'
import './Mycard.css';
export default function Mycard(props) {
  return (
    <div className="mycard">
        <img src = {props.name}></img>
    </div>
  )
}
