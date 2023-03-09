import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/productDetails.css"
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {cartActions} from "../redux/slice/cartSlice"
import { toast } from "react-toastify";



const ProductDetails = () => {
    const dispatch = useDispatch()


    const {id} = useParams()
    const product = products.find(item=> item.id === id)

    const {imgUrl, productName, price, avgRating, reviews, description, shortDesc } = product

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            image: imgUrl,
            productName,
            price,

        }))

        toast.success("Product added successfully")
    }


    return(
       <Helmet title={productName}>
        <CommonSection title={productName}/>

        <section className="pad">
            <Container>
                <Row>
                    <Col lg='6'>
                        <img src={imgUrl} alt="" />
                    </Col>

                    <Col lg='6'>
                        <div className="product__details">
                            <h2>{productName}</h2>

                            <div className="product__rating">
                                <div>
                                    <span><i class="ri-star-fill"></i></span>
                                    <span><i class="ri-star-fill"></i></span>
                                    <span><i class="ri-star-fill"></i></span>
                                    <span><i class="ri-star-fill"></i></span>
                                    <span><i class="ri-star-half-s-fill"></i></span>


                                </div>

                                <p>(<span>{avgRating}</span>ratings)</p>
                            </div>
                            <span className="product__price">${price}</span>
                            <p>{shortDesc}</p>

                            <motion.button whileTap={{scale: 1.2}} 
                                className="buy__btn" onClick={addToCart}>Add to Cart</motion.button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

            
       </Helmet>
    )
}

export default ProductDetails;