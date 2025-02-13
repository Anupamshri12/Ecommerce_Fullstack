import  React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { decrease_cart } from '../feautres/Slice';
import { increase_cart } from '../feautres/Slice';
import { addtocart } from '../feautres/Slice';
import './describe.css'
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
export default function DESCRIBE() {
  const product = useSelector((state)=>{
    return state.carts.items;
  })
  const dispatch = useDispatch();
  const {id} = useParams();
 const [count ,setcount] = useState(1);
  
  return (
   <div className="div1">
    <div className="div2">
      <div className="img1">
      <img src = {product[id-1].url}/>
      </div>
        
        <div className="div3">
        <h4>{product[id-1].name}</h4>
            <p>{product[id-1].Title}</p>
            <p><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>{product[id-1].price}<span style = {{marginLeft:".8rem"}}>(Inclusive all Taxes)</span></p>
            <h3>SELECT YOUR SIZE</h3>
           {
             product[id-1].id === 3?(
              <div className="options">
             <p id = "p1">7</p>
             <p id = "p2">8</p>
             <p id = "p3">9</p>
             <p id = "p4">10</p>
             <p id = "p5">11</p>
                         

         </div>
             ): product[id-1].id === 6?(
              <div className="options">
              <p id = "p1">30</p>
              <p id = "p2">32</p>
              <p id = "p3">34</p>
              <p id = "p4">36</p>
              <p id = "p5">38</p>
              </div>
             ):
             <div className="options">
             <p id = "p1">S</p>
             <p id = "p2">M</p>
             <p id = "p3">L</p>
             <p id = "p4">XL</p>
             <p id = "p5">XXL</p>
                         

         </div>
           }
           
            <div className="buttons">
                <div className="wh">
                <button className="btn1" onClick={()=>{
                  if(count > 0){
                    setcount(count-1);
                  }
                }}>-</button>
                <p>{count}</p>
                <button className="btn1" onClick={()=>setcount(count+1)}>+</button>

                </div>
               <button className="cart" onClick= {()=>{dispatch(addtocart(product[id-1]))
                toast("ITEM ADDED TO YOUR CART",{
                  position:"bottom-left",
                  type:"success"
                } )
              }}>ADD to CART<ToastContainer/></button>
            </div>
            <button className="wish">ADD TO YOUR WISHLIST</button>
        </div>
    </div>
   </div>
  )
}
