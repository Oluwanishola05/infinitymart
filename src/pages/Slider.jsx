import React from 'react';
import "../styles/Slider.css";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import heroImg from "../assets/images/hero-img.png";
import phone01 from "../assets/images/phone-01-new.png";
import watch01 from "../assets/images/watch-01-new.png";
import { motion } from 'framer-motion';


const Slider = () => {

    const year = new Date().getFullYear()

  return (
    
      
    <Carousel  autoPlay
    interval={10000}
    showStatus={false}
    showThumbs={false}
    infiniteLoop>
      
      <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero__content">
                                <p className="hero__subtitle">Trending Product in {year}</p>
                                <h2>Make your Interior More Minimalistic & Modern</h2>
                                <p className="hero__description">They combine high end furniture materials 
                                    with creative styles that make them simply unique. 
                                    Whether it's a bed base, a leather sofa, 
                                    a solid wood dining table, or a sideboard, 
                                    every piece of furniture can be a piece of luxury.
                                </p>
                                <motion.button whileTap={{scale: 1.2 }} className="buy__btn">
                                    <Link className="buy__btn" to='/shop'>SHOP NOW</Link>
                                </motion.button>

                            </div>
                        </Col>

                       
                        <Col lg='6' md='6'>
                            <div className="hero__img">
                            <img src={heroImg} alt="" className="img__hero"/>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
      


      
      <section className="hero__section1">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero__content">
                                <p className="hero__subtitle">Trending Product in {year}</p>
                                <h2>Connect to the World with Your Mobile Phone</h2>
                                <p className="hero__description">A mobile phone is a wireless 
                                        handheld device that allows users to make and receive calls. 
                                        While the earliest generation of mobile phones could only make 
                                        and receive calls, today's mobile phones do a lot more, 
                                        accommodating web browsers, games, cameras, 
                                        video players and navigational systems.
                                </p>
                                <motion.button whileTap={{scale: 1.2 }} className="buy__btn">
                                    <Link className="buy__btn" to='/shop'>SHOP NOW</Link>
                                </motion.button>

                            </div>
                        </Col>

                       
                        <Col lg='6' md='6'>
                            <div className="hero__img">
                            <img src={phone01} alt="" className="img_hero"/>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
      


      
      <section className="hero__section2">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero__content">
                                <p className="hero__subtitle">Trending Product in {year}</p>
                                <h2>Beautify And Transform Your Appearance  </h2>
                                <p className="hero__description">Wristwatch is worn around the wrist, 
                                    most of the left hand. It is a time measuring machine. 
                                    A wristwatch is easily available in different shapes and sizes. 
                                    Some like around while others prefer flat wristwatches.
                                </p>
                                <motion.button whileTap={{scale: 1.2 }} className="buy__btn">
                                    <Link className="buy__btn" to='/shop'>SHOP NOW</Link>
                                </motion.button>

                            </div>
                        </Col>

                       
                        <Col lg='6' md='6'>
                            <div className="hero__img">
                            <img src={watch01} alt="" className="img_hero"/>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
      
    </Carousel>
 


    
  )
}

export default Slider;
