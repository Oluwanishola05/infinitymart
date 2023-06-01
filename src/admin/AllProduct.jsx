import React from 'react';
import { Button } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';

import useGetData from '../custom hooks/useGetData';
import '../styles/allProduct.css'
import {  InfinitySpin} from 'react-loader-spinner';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';

const AllProducts = () => {
  const {data: productsData, loading} = useGetData('products');

  const deleteProduct = async(id)=>{
    await deleteDoc(doc(db, 'products', id))
    toast.success('Deleted!');
  }
 

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  loading ? <Col lg='12' className="spin">
                  <InfinitySpin 
                    width='150'
                    color="blue"
                  />
              </Col> : productsData.map(item=> (
                      <tr >
                    <td><img src={item.imgUrl} alt=''/></td>
                    <td>{item.productName}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td><Button onClick={()=>{deleteProduct(item.id)}} className='btn-danger'>Delete</Button></td>
                  </tr>
                    ))
                  
                }
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AllProducts;
