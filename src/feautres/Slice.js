import { createSlice } from "@reduxjs/toolkit";
import product from '../Home'

const initialState = { 
   cart:[],
   items: product,
   Totalquantity: 1,
   Totalprice: 0
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
     addtocart: (state ,action)=>{
      const find = state.cart.findIndex((item)  =>item.id === action.payload.id);
      if(find  >= 0 ){
         state.cart[find].quantity += 1;
         
      }
      else{
         const temp = {...action.payload ,quantity:1};
         state.cart.push(temp)
        
      }
      
     },
     gettotalcart: (state) =>{
      let {Totalquantity ,Totalprice} = state.cart.reduce((cartTotal ,cartItem)=>{
              const {price ,quantity} = cartItem;
              const itemTotal = price*quantity;
              cartTotal.Totalprice += itemTotal;
              cartTotal.Totalquantity += quantity;
              return cartTotal;        
      },
      {
         Totalprice: 0,
         Totalquantity: 0
      }
     

      );
      state.Totalprice = parseInt(Totalprice.toFixed(2));
      state.Totalquantity = Totalquantity;
     },
     remove_user: (state ,action) =>{
      const k = state.cart.filter((cartitem)=>{
         if(cartitem.id === action.payload.id){
            return false;
         }
         return true;
      })
      
      state.cart = k;
     },
     decrease_cart: (state ,action) =>{
       const find = state.cart.findIndex((item)=> item.id === action.payload.id);
       if(find >= 0){
          state.cart[find].quantity -= 1;
          if(state.cart[find].quantity == 0){
            const k = state.cart.filter((cartitem)=>{
               if(cartitem.id === action.payload.id){
                  return false;
               }
               return true;
            })
            
            state.cart = k;
         } 
         
       }
      
     },
     increase_cart: (state ,action) =>{
      const find = state.cart.findIndex((item)=> item.id === action.payload.id);
      if(find >= 0){
         state.cart[find].quantity += 1; 
        
      }
   return state;
     },
     descr: (state ,action) =>{
     
      const newItem = {action ,quantity: 1 };
      state.cart.push(newItem);
        
      
     }
  },
});


export const {addtocart , gettotalcart ,remove_user ,decrease_cart ,increase_cart ,descr} = counterSlice.actions;
export default counterSlice.reducer;