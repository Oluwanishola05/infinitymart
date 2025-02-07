import React from "react";
import {  Routes, Route, Navigate } from  "react-router-dom";


import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";
import Login from "../../pages/Login";
import ProductDetails from "../../pages/ProductDetails";
import Shop from "../../pages/Shop";
import Signup from "../../pages/Signup";
import ProtectedRoute from "../ProtectedRoute";
import AddProduct from "../../admin/AddProduct";
import AllProducts from "../../admin/AllProduct";
import Dashboard from "../../admin/Dashboard";
import Users from "../../admin/Users";
import Success from "../../components/Stripe-success-cancel/success";
import Cancel from "../../components/Stripe-success-cancel/cancel";
import PayStackIntegretion from "../../pages/PayStackIntegretion";



const Routers = () => {
    return (
    <Routes>
        <Route path= '/' element={ <Navigate to= 'home' />} />
        <Route path= 'home' element={<Home />} />
        <Route path= 'shop' element={<Shop />} />
        <Route path= 'shop/:id' element={<ProductDetails />} />
        <Route path= 'cart' element={<Cart />} />
        

        <Route path="/*" element={<ProtectedRoute/>} >
            <Route path= 'checkout' element={<Checkout />} />
            <Route path= 'paystack' element={<PayStackIntegretion />} />
            <Route path= 'success' element={<Success />} />
            <Route path= 'cancel' element={<Cancel />} />
            <Route path= 'dashboard' element={<Dashboard />} />
            <Route path= 'dashboard/all-products' element={<AllProducts />} />
            <Route path= 'dashboard/add-product' element={<AddProduct />} />
            <Route path= 'dashboard/users' element={<Users />} />
        </Route>
    
        <Route path= 'login' element={<Login />} />
        <Route path= 'signup' element={<Signup />} />

    </Routes>
    )
}

export default Routers;