import React from "react";

import { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../Services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
 
const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [womanTopProducts, setWomanTopProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [shoeProducts, setShoeProducts] = useState([]);
    
    const year = new Date().getFullYear();

    useEffect(() => {
        const filteredTrendingProducts = products.filter(
            (item) => item.category === 'chair');

        const filteredBestSalesProducts = products.filter(
            (item) => item.category === 'sofa');
    
         const filteredMobileProducts = products.filter(
                (item) => item.category === 'mobile');

        const filteredWirelessProducts = products.filter(
                (item) => item.category === 'wireless');

        const filteredPopularProducts = products.filter(
                (item) => item.category === 'watch');
        
        const filteredShoeProducts = products.filter(
                (item) => item.category === 'shoe');
        
        const filteredWomanTopProducts = products.filter(
                (item) => item.category === 'womanTop');


    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)
    setShoeProducts(filteredShoeProducts)
    setWomanTopProducts(filteredWomanTopProducts)
        }, []);
    
    return(
        <Helmet title={"Home"}>
           
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

            <Services />

            <section className="trending__products">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center" >
                            <h2 className="section__title">Trending Products</h2>
                        </Col>

                        <ProductList data={trendingProducts}/>
                        <ProductList data={shoeProducts}/>
                    </Row>
                </Container>

            </section>

            <section className="best__sales">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center" >
                            <h2 className="section__title">Best Sales</h2>
                        </Col>
                        <ProductList data={bestProducts} />
                       
                     </Row>
                </Container>
            </section>
            
           

            <section className="timer__count">
                <Container>
                    <Row>
                        <Col lg='6' md='12' className="count__down-col">
                            <div className="clock__top-content">
                                <h4 className="HFour">Limited Offers</h4>
                                <h3 className="HThree">Quality Armchair</h3>

                            </div>
                                <Clock />

                                <motion.button whileTap={{scale: 1.2 }} className="buy__btn__store" id="buy__btn__store">
                                    <Link to='/shop' className="buy__btn__store" style={{textDecoration: 'none'}}>Visit Store</Link>
                                </motion.button>
                        </Col>
                        <Col lg='6' md='12' className="text-end counter__img">
                            <img src= {counterImg} alt="" className="text-end"/>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="new__arrivals">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section__title">New Arrivals</h2>
                            <ProductList data={mobileProducts} />
                            <ProductList data={wirelessProducts} />
                        </Col>
                    </Row>
                </Container>

            </section>

            <section className="popular__category">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section__title">Popular in Category</h2>
                            <ProductList data={popularProducts} />
                            
                        </Col>
                    </Row>
                </Container>

            </section>

                      

        </Helmet>
    )
}

export default Home;