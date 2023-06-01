
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "react-bootstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slice/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import PayStackIntegretion from "./PayStackIntegretion";






const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    

  
    
    /*
    const checkout = ({item}) =>{
        fetch("http://localhost:5000/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type:":"application/json"
            },
            mode:"cors",
            body:JSON.stringify({
                items:[
                  //  {id:item.id, quantity: item.quantity, price: item.price, name: item.productName}
                ]
            })
        })
        .then(res => {
            if(res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        })
        .then(({url}) => {
            window.location =url
        })
        .catch(e => {
            console.log(e.error)
        })
    }
    
    
    ****/
   

    return(
        <Helmet>
            <CommonSection title='Shopping Cart' />
 

            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length === 0 ? (<h2>No item added to the cart</h2>
                                ) : (
                                <table className="table bordered">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map((item, index)=>(
                                            <Tr item={item} key={index}/>
                                        ))
                                    }

                                    
                                </tbody>
                                
                            </table>
                            )
                            }
                            
                        </Col>

                        <Col lg='3'>
                            <div>
                                <h6 className="subtotal">Subtotal:
                                <span className="priceTotal"><span>&#8358;</span> {totalAmount}</span>
                                </h6>
                                
                            </div>
                            <p className="tax">Taxes and Shipping will be calculate in checkout</p>

                            
                            <div>
                                
                                <motion.button whileTap={{scale: 1.2}} className="buy__btn__cart" >
                                    <Link to='/paystack'  style={{ color: '#FFF', textDecoration: 'none' }}>
                                        Checkout
                                     </Link>
                                </motion.button>
                                

                               


                                <motion.button whileTap={{scale: 1.2}} className="buy__btn__cart" >
                                    <Link to='/shop' style={{ color: '#FFF', textDecoration: 'none' }}>
                                        Continue Shopping
                                     </Link>
                                </motion.button>

                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

const Tr = ({item}) => {
    
    const dispatch = useDispatch ()
    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id)) 
    }

    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const [quantityCart, setQuantityCart] = useState(1);
    const [ setFinalAmount] = useState(totalAmount);

    const decrement = (item) =>{
        if(quantityCart <= 1){
            setQuantityCart(1);
            setFinalAmount(totalAmount);
    }
    if(quantityCart > 1){
        setQuantityCart(quantityCart - 1);
        setFinalAmount(totalAmount - item.price);
    }
    }
    const increment = (item) =>{
        setQuantityCart(quantityCart + 1);
        setFinalAmount(totalAmount + item.price);
    }
   
    
   
    return (
        <tr >
                                        <td><img src={item.imgUrl} alt="" /></td>
                                        <td>{item.productName}</td>
                                        
                                        <td><span>&#8358;</span> {item.price}</td>
                                        <td>
                                            <span className="decrement" onClick={decrement}> - </span>
                                            {item.quantity}
                                            <span className="increment" onClick={increment}> +</span>
                                        </td>
                                        <td>
                                            <motion.i 
                                            whileTap={{scale: 1.2}} 
                                            onClick={deleteProduct}
                                            class="ri-delete-bin-line">

                                            </motion.i>
                                        </td>
                                        
                                      </tr>
    )
}

export default Cart;