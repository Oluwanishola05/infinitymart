import React from "react";

import { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../Services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";

import Slider from "./Slider";




 
const Home = () => {

    //const {data: products} = useGetData('products')


    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [womanTopProducts, setWomanTopProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [shoeProducts, setShoeProducts] = useState([]);
    
    

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
        }, [products]);
    
    return(
        <Helmet title={"Home"}>
           
            <Slider/>

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
                            <ProductList data={womanTopProducts} />
                        </Col>
                    </Row>
                </Container>

            </section>

                      

        </Helmet>
    )
}

export default Home;