import  React from 'react'
import { useEffect} from 'react';
import {useNavigate} from "react-router-dom"
export default function Protected(props) {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('authtoken');
        if(!login){
            navigate('/signin');
        }
    })
  return (
    <div>
        <Component/>
    </div>
  )
}
