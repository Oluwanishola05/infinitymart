import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "react-bootstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slice/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";




const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount)

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
                                <span className="priceTotal">$ {totalAmount}</span>
                                </h6>
                                
                            </div>
                            <p className="tax">Taxes and Shipping will be calculate in checkout</p>
                            <div>
                                <motion.button whileTap={{scale: 1.2}} className="buy__btn__cart" >
                                    <Link to='/checkout' style={{ color: '#FFF', textDecoration: 'none' }}>
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
    return (
        <tr >
                                        <td><img src={item.imgUrl} alt="" /></td>
                                        <td>{item.product}</td>
                                        <td>$ {item.price}</td>
                                        <td>{item.quantity}px</td>
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