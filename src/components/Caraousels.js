import React from 'react'
import './Caraouselss.css'
import { useSelector , useDispatch} from "react-redux";
import { addtocart, descr } from '../feautres/Slice';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
export default function Caraousels() {
  const product = useSelector((state)=>{
    return state.carts.items
  })
  const dispatch = useDispatch();
  return (
   <>
   <div className="starter" id = "near">
    <h2>TRENDING</h2>
    <p>NEAR YOU</p>
   </div>
    <div className="flex-hu">
      {
      product.map((producthu)=>{
        return(
          <div  className="stylese" key = {producthu.id}>
            <div>
              <Link to = {`/DESCRIBE-details/${producthu.id}`}>
              <img src ={producthu.url} alt = "ERROR" width="100%" ></img>
              </Link>
              <div className="part-sa">
                <div>
                <h4>{producthu.Title}</h4>
              <p>{producthu.name}</p>
              <p><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i> {producthu.price}</p>
              <button className="cart-wala" onClick={()=>{dispatch(addtocart(producthu))
          toast("ITEM ADDED TO YOUR CART",{
            position:"bottom-left",
            type:"success"
          } )
              }}>Add to Cart
              <ToastContainer/>
              </button>
                </div>
            
              <div className="start-hu">
            <button><i class="fa-solid fa-star"></i>4.4 </button><span><i class="fa-solid fa-heart"></i></span>
           </div>
                </div>
            
                
           </div>
          
          </div>
        )
      })
      }
    </div>
   </>
  )
}
