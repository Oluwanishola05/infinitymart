import React from "react";
import { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "react-bootstrap";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";

import '../styles/shop.css'

const Shop = () => {

    const [productsData, setProductsData] = useState(products)

    const handleFilter = e => {
        const filterValue = e.target.value;
            if (filterValue ==="chair"){
                const filteredProducts = products.filter(
                    item => item.category ==="chair");

                    setProductsData(filteredProducts);
            }

            if (filterValue ==="mobile"){
                const filteredProducts = products.filter(
                    item => item.category ==="mobile");

                    setProductsData(filteredProducts);
            }

            if (filterValue ==="chair"){
                const filteredProducts = products.filter(
                    item => item.category ==="chair");

                    setProductsData(filteredProducts);
            }

            if (filterValue ==="wireless"){
                const filteredProducts = products.filter(
                    item => item.category ==="wireless");

                    setProductsData(filteredProducts);
            }

            if (filterValue ==="watch"){
                const filteredProducts = products.filter(
                    item => item.category ==="watch");

                    setProductsData(filteredProducts);
            }

            if (filterValue ==="Hats"){
                const filteredProducts = products.filter(
                    item => item.category ==="Hats");

                    setProductsData(filteredProducts);
            }

            if (filterValue ==="jackets"){
                const filteredProducts = products.filter(
                    item => item.category ==="jackets");

                    setProductsData(filteredProducts);
            }

            if (filterValue ==="womanTop"){
                const filteredProducts = products.filter(
                    item => item.category ==="womanTop");

                    setProductsData(filteredProducts);
            }

            if (filterValue ==="men"){
                const filteredProducts = products.filter(
                    item => item.category ==="men");

                    setProductsData(filteredProducts);
            }
    };

    const handleSearch = e => {
        const searchTerm = e.target.value

        const searchedProducts = products.filter(
            item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

            setProductsData(searchedProducts)
    }

    return (
    <Helmet title="Shop">
        <CommonSection title="Products"/>

        <section>
            <Container>
                <Row>
                    <Col lg='3' md='6'>
                        <div className="filter__widget">
                            <select onChange={handleFilter}>
                                <option >Filter By Category</option>
                                <option value="chair">chair</option>
                                <option value="mobile">mobile</option>
                                <option value="chair">Chair</option>
                                <option value="watch">Watch</option>
                                <option value="wireless">Wireless</option>
                                <option value="Hats">Hat</option>
                                <option value="jackets">Jacket</option>
                                <option value="womanTop">Woman Top</option>
                                <option value="men">Men </option>
                            </select>
                        </div>
                    </Col>

                    <Col lg='3' md='6'>
                        <div className="filter__widget">
                            <select>
                                <option >Sort By</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                                
                            </select>
                        </div>
                    </Col>

                    <Col lg='6' md='12'>
                        <div className="search__box">
                            <input 
                            type="text" 
                            placeholder="Search......" 
                            onChange={handleSearch}/>
                            <span><i class="ri-search-line"></i></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="option">
            <Container>
                <Row>
                    {
                        productsData.length === 0? (<h1 className="text-center-emptyProduct">No Products found!</h1>
                       ) : (<ProductList data={productsData} />
                    )}
                </Row>
            </Container>
        </section>

    </Helmet>
    );
}; 

export default Shop;