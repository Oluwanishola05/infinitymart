import React from "react";


import { createSlice } from '@reduxjs/toolkit';


 




const initialState = {
 
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem:  (state, action)=>{
            const newItem= action.payload
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );

        
            state.totalQuantity++
            
            if(!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
            })
        }
        
        else {
            existingItem.quantity++
            existingItem.totalPrice = Number(existingItem.totalPrice) + Number
            (newItem.price)
        }

        state.totalAmount = state.cartItems.reduce(
            (total, item) => total + Number(item.price) * Number(item.quantity), 0)
      
    },

   
    deleteItem:(state, action) => {
        const id = action.payload
        const existingItem = state.cartItems.find(item=> item.id===id)
        //const reduce = state.cartItems.totalQuantity - 1
                
                
        if(existingItem){
            state.cartItems = state.cartItems.filter(item=> item.id !== id)
            state.totalQuantity = state.totalQuantity - existingItem.quantity

        }

    

        state.totalAmount = state.cartItems.reduce((total, item) => total +
        Number(item.price) * Number(item.quantity), 0)
    },

    reduceItem:(state, action) => {
        const id = action.payload
        const existingItem = state.cartItems.find(item=> item.id===id)
        //const reduce = state.cartItems.totalQuantity - 1
                
     if(existingItem.quantity>0)
     {    
        if(existingItem){
           
           existingItem.quantity = existingItem.quantity - 1;
           state.totalQuantity = existingItem.quantity;
        }

        if(existingItem.quantity == 0){
          //  deleteItem;
        }

    
        
        state.totalAmount = state.cartItems.reduce((total, item) => total +
        Number(item.price) * Number(item.quantity), 0)
    }
    },

    increaseItem:(state, action) => {
        const id = action.payload
        const existingItem = state.cartItems.find(item=> item.id===id)
        
                
        
        if(existingItem){
           // alert(existingItem.quantity + 1);
           existingItem.quantity = existingItem.quantity + 1;
           state.totalQuantity = existingItem.quantity;
        }

    
        
        state.totalAmount = state.cartItems.reduce((total, item) => total +
        Number(item.price) * Number(item.quantity), 0)
    
    }

    

    
},

    

    
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer;

