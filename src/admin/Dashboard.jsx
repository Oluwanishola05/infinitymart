import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/dashboard.css";

import useGetData from "../custom hooks/useGetData";


const Dashboard = () => {

  const { data: products} = useGetData('products');
  const { data: users} = useGetData('users');
  return (
    <section>
      <Container>
          <Row>
            <Col lg='3'>
              <div className="revenue__box">
                <h5 className="headin">Total Sales</h5>
                <span className="quan">$4000</span>
              </div>
            </Col>

            <Col lg='3'>
              <div className="order__box">
                <h5 className="headin">Orders</h5>
                <span className="quan">230</span>
              </div>
            </Col>

            <Col lg='3'>
              <div className="product__box">
                <h5 className="headin">Total Products</h5>
                <span className="quan">{products.length}</span>
                
              </div>
            </Col>

            <Col lg='3'>
              <div className="user__box">
                <h5 className="headin">Total Users</h5>
                <span className="quan">{users.length}</span>
                
              </div>
            </Col>
          </Row>
      </Container>
    </section>
  )
}

export default Dashboard;
