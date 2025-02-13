import React, { useEffect } from 'react'
import './Header.css'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { gettotalcart } from '../feautres/Slice';
import { useDispatch } from 'react-redux';
import { remove_user } from '../feautres/Slice';
import { decrease_cart } from '../feautres/Slice';
import { increase_cart } from '../feautres/Slice';
export default function Header() {
  const {cart ,Totalquantity ,Totalprice} = useSelector((state)=>{
    return state.carts;
  });
 const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(gettotalcart())
 } ,[cart])
 const handlerem = (cartitem)=>{
  dispatch(remove_user(cartitem));
 }
 const handlede = (cartitem)=>{
  dispatch(decrease_cart(cartitem));
 }
 const handleincrease = (cartitem)=>{
  dispatch(increase_cart(cartitem))
 }
  return (
    <>
    <div className="mai-wal">
    
    <div  className="hu-wal">
    <p>Total Cart Items: {cart.length}</p>
        {
           cart.map((cartitem)=>{
                return(
                    <div className="namaste" key = {cartitem.id}>
                       <img src = {cartitem.url} alt = "ERROR" width="20%"></img>
                       <span className="hai-kya">
                       <span> {cartitem.Title} </span>
                       <span> {cartitem.name} </span>
                       <button className="btn-wal" onClick={()=>handlede(cartitem)}>-</button>
                        <span className="span-wal"> {cartitem.quantity} </span>
                       <button className="btn-wal" onClick={()=>handleincrease(cartitem)}>+</button>
                       <div> <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i> {cartitem.quantity*cartitem.price} </div>
                       <button className="btn" onClick={()=>handlerem(cartitem)}>Delete</button>
                       <div style = {{height:"1px" , width:"100%" ,background:"black"}}></div>
                        </span>
                      
                    </div>
                    

                )
            })
        }
    </div>
    <div className="sum-hu" id ="helo">
      <h2>
        SUMMARY
        </h2>
        <hr></hr>
      
      <h3>Totalquantity: <span className="sp1">{Totalquantity}</span></h3>
      <h4>Totalprice:   <span className="sp2">{Totalprice}</span> </h4>
      <button className="out">CHECKOUT NOW</button>
    </div>
   
    </div>
    </>
  )
}
