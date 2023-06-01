import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js'
import "../styles/paystack.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup } from "react-bootstrap";


const PayStackIntegretion = () => {
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState(totalAmount)
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname]= useState("")

    const navigate = useNavigate()

    const paywithpaystack = (e) => {
        e.preventDefault()
        const paystack = new PaystackPop()
        paystack.newTransaction({
            key:"pk_test_5cc9add313c4a69cc3d10b36cc6c707787ed9ad6",
            amount: amount*100,
            email,
            firstname,
            lastname,
            onSuccess(transaction){
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert(message)
                setEmail("")
                setAmount("")
                setFirstname("")
                setLastname("")

                navigate('/home')
            },
            onCancel(){
                alert("You transaction has been cancel")
            }

        })
    }
    
    return (
        /*
        <div className='paymentContainer'>

            <h4>MAKE PAYMENT</h4>

            <div className='payForm'>
                <Form className="paymentForm">
                <FormGroup className="payment__groups">
                    <input type="email" placeholder="Email" 
                        value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </FormGroup>

                <FormGroup className="payment__groups">
                    <input type="tel" placeholder="Amount" 
                        value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </FormGroup>
            
                <FormGroup className="payment__groups">
                    <input type="text" placeholder="FirstName" 
                        value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                </FormGroup>

                <FormGroup className="payment__groups">
                    <input type="text" placeholder="LastName" 
                        value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                <button type="submit" className="btn__login" onClick={paywithpaystack}>
                    Pay
                </button>
                </FormGroup>
                
                </Form>
            </div>
        </div>
        */

        <section className="login__section">
                <Container>
                    <Row>  
                        
                           
                                <Col className="col__login">
                                <h3 className="login">Make Payment</h3>
    
                                    <Form className="auth__form" >
                                        <FormGroup className="form__groups">
                                            <input type="email" placeholder="Enter your email" 
                                            value={email} onChange={e=> setEmail(e.target.value)}/>
                                        </FormGroup>
    
                                        <FormGroup className="form__groups">
                                            <input type="tel" placeholder="Amount" 
                                            value={amount} onChange={e=> setAmount(e.target.value)}/>
                                        </FormGroup>

                                        <FormGroup className="form__groups">
                                            <input type="text" placeholder="FirstName" 
                                                value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                                        </FormGroup>

                                        <FormGroup className="form__groups">
                                            <input type="text" placeholder="LastName" 
                                                value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                                        </FormGroup>

    
                                        <div>
                                            <button type="submit" className="btn__login" onClick={paywithpaystack}>
                                                PAY
                                            </button>
                                        </div>
                             
                                        
                            
                                        
                               
                                    </Form>                            
                            </Col>
                                            
                    </Row>
                </Container>
            </section>
    )
} 

export default PayStackIntegretion;
