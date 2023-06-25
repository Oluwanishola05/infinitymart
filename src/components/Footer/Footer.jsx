import React from "react";
import './Footer.css';

import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';


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
                                <p id="text-footer">InfinityMart</p>
                            </div>
                    </div>

                    <p className="footer__text">
                        Infinity Mart is a marketplace where you can buy and sell products online in the easiest way possible
                        ! We are here to make your life easier by providing an easy platform for all of our customers so
                        that there trasaction will be easy.

                    </p>
                    </Col>

                 
                    <Col lg="3" md="3">
                    <div>
                            <h4 className="quick__link-title">Contact</h4>
                            
                                <div className="quickLink">
                                    <span className="icon"><i class="ri-map-pin-line"></i></span>
                                    <p className="address">Agege Motor Road, Mushin, <br/>
                                                            Lagos State.</p>
                                

                                
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
                    
                    </Col>

                    <Col lg='12' md="12">
                        <div className="social-icon">
                     
                           { /*
                            <FaTwitter size={25} className="media" onClick={() => window.open( 'http://www.twitter.com')}/>
                            <FaInstagram size={25} className="media" onClick={() => window.open( 'http://www.instagram.com')}/>
                            <FaFacebook size={25} className="media" onClick={() => window.open( 'http://www.facebook.com')}/>
                            <FaLinkedin size={25} className="media" onClick={() => window.open( 'http://www.linkedin.com')}/>
                            <FaGoogle size={25} className="media" onClick={() => window.open( 'http://www.google.com')}/>
    */}
                            <FaFacebook size={25}  className="media" onClick={() => window.open('http://www.facebook.com')}/>
                            <FaInstagram size={25} className="media" onClick={() => window.open('http://www.instagram.com')}/>
                            <FaLinkedin size={25}  className="media" onClick={() => window.open('http://www.linkedin.com')}/>
                            <FaTwitter size={25} className="media" onClick={() => window.open('http://www.twitter.com')}/>
                            <FaGoogle size={25} className="media" onClick={() => window.open('http://www.google.com')}/>
                            

                        </div>
                        <p className="footer__copyright">Copyright {years} ND 3 FINAL PROJECT. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;