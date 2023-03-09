import React from "react";
import { Container, Row, Col, FormGroup, Form } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";



const Checkout = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    return(
        <Helmet>
            <CommonSection title="Checkout"/>
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h5>Billing Information</h5>
                            <Form className="billing__form">
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Enter Your name" />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="email" placeholder="Enter Your email" />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="number" placeholder="Phone Number" />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Street Address" />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder="City" />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Postal code" />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Country" />
                                </FormGroup>
                            </Form>
                        </Col>

                        <Col lg="4">
                            <div className="checkout__cart">
                                <h5>
                                    Total Qty: <span>{totalQty} items</span>
                                </h5>
                                <h5>
                                    Subtotal: <span>${totalAmount}</span>
                                </h5>
                                <h5>
                                    <span>
                                        Shipping: <br /> 
                                        free shipping</span>
                                    <span>$0</span>
                                </h5>
                                
                                <h4>
                                    Total Cost: <span>${totalAmount}</span>
                                </h4>

                            <button className="btn__order">
                                PLACE ORDER
                            </button>
                            </div>
                           
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Checkout;