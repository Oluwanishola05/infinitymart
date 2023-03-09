import React from "react";
import './Footer.css';


import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {

    const years = new Date().getFullYear();
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4" md="3">
                    <div className="logo">
                          
                            <div>
                                <h1 id="text-footer">InfinityMart</h1>
                            </div>
                    </div>

                    <p className="footer__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Neque, eveniet temporibus sequi deleniti rem delectus amet. 
                        Vitae molestias dolore eos ipsam iste architecto, 
                        natus praesentium excepturi nemo laborum optio quis.

                    </p>
                    </Col>

                 
                    <Col lg="3" md="3">
                    <div>
                            <h4 className="quick__link-title">Contact</h4>
                            
                                <div className="quickLink">
                                    <span className="icon"><i class="ri-map-pin-line"></i></span>
                                    <p className="address">Agege Motor Road, Mushin, Lagos State.</p>
                                

                                
                                    <span className="icon"><i class="ri-phone-line"></i></span>
                                    <p className="address">(+234)-808-949-2863</p>
                                

                                
                                    <span className="icon"><i class="ri-mail-line"></i></span>
                                    <p className="address">joshuaoloworise@gmail.com</p>
                                </div>

                                
                           
                    </div>
                    </Col>

                    <Col lg="3" md="3"> 
                        <div className="footer__panel">
                            <h4 className="quick__link-title">Top Categories</h4>

                            <ul className="list">
                                <li>
                                    <Link to='#' style={{ color: '#FFF', textDecoration: 'none' }}>Mobile Phone</Link>
                                </li>

                                <li>
                                    <Link to='#' style={{ color: '#FFF', textDecoration: 'none' }}>Modern Sofa</Link>
                                </li>

                                <li>
                                    <Link to='#' style={{ color: '#FFF', textDecoration: 'none' }}>Arm Chair</Link>
                                </li>

                                <li>
                                    <Link to='#' style={{ color: '#FFF', textDecoration: 'none' }}>Smart Watches</Link>
                                </li>
                            </ul>

                        </div>
                    </Col>

                    <Col lg="2" md="3">
                    <div >
                            <h4 className="quick__link-title">Useful Links</h4>
                            
                           <div className="quickLink"> 
                            <ul className="list">
                                <li>
                                    <Link to='/shop' style={{ color: '#FFF', textDecoration: 'none' }}>Shop</Link>
                                </li>                                                    
            
                                <li>
                                    <Link to='/cart' style={{ color: '#FFF', textDecoration: 'none' }}>Cart</Link> 
                                </li>

                                <li>
                                    <Link to='/login' style={{ color: '#FFF', textDecoration: 'none' }}>Login</Link>
                                </li>

                                <li>
                                    <Link to='#' style={{ color: '#FFF', textDecoration: 'none'  }}>Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>           
                                

                                
                                    
                                
                            
                    </div>
                    </Col>

                    <Col lg='12' md="12">
                        <p className="footer__copyright">Copyright {years} developed by Oloworise Joshua. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;