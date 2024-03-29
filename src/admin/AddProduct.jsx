import React from 'react';
import { useState } from 'react';
import '../styles/AddProduct.css';
import { Form, Container, Row, Col, FormGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { db, storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

  const [enterTitle, setEnterTitle] = useState('')
  const [enterShortDesc, setEnterShortDesc] = useState('')
  const [enterDescription, setEnterDescription] = useState('')
  const [enterCategory, setEnterCategory] = useState('')
  const [enterPrice, setEnterPrice] = useState('')
  const [enterProductImg, setEnterProductImg] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const addProduct = async(e)=>{
    e.preventDefault()
    setLoading(true)

   // const product = {
     // title: enterTitle,
     // shortDesc: enterShortDesc,
     // description: enterDescription,
     // category: enterCategory,
     // price: enterPrice,
     // imgUrl: enterProductImg
    //};

    // ======== add product to the firevase database ========
    try {

        const docRef = await collection(db, 'products')
        const storageRef = ref(storage, `productImages/${Date.now() + 
          enterProductImg.name}`)
        
          const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

          uploadTask.on(() =>{
              toast.error('images not uploaded')
          }, ()=> {
              getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
                await addDoc(docRef, {
                  productName: enterTitle,
                  shortDesc: enterShortDesc,
                  description: enterDescription,
                  category: enterCategory,
                  price: enterPrice,
                  imgUrl: downloadURL,
                 
                })
              })
              
          } )

          setLoading(false)
          toast.success('Product added Successfully');
          navigate('/dashboard/all-products')
    } catch (err) {

        setLoading(false)
        toast.error('product not added!');
    }

    

    //console.log(product);
  }

  return <section>
    <Container>
      <Row>
        <Col lg='12'>
          {
            loading ? (<h4>Loading......</h4>
            ) : (
            <>
             <h4 className='add'>Add Product</h4>
              <Form onSubmit={addProduct}>
                <FormGroup className='form__group'>
                  <span>Product Title</span>
                  <input type="text" placeholder='Product Name' value={enterTitle}
                    onChange={e=> setEnterTitle(e.target.value)} required/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <span>Short Description</span>
                  <input type="text" placeholder='description...' value={enterShortDesc}
                    onChange={e=> setEnterShortDesc(e.target.value)} required/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <span>Description</span>
                  <input type="text" placeholder='description...' value={enterDescription}
                    onChange={e=> setEnterDescription(e.target.value)} required/>
                </FormGroup>

            <div className='split'>
                <FormGroup className='form__group'>
                  <span>Price</span>
                  <input type="number" placeholder='$100' value={enterPrice}
                    onChange={e=> setEnterPrice(e.target.value)} required/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <span>Category </span>
                  <select className='selection' value={enterCategory}
                    onChange={e=> setEnterCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="chair">Chair</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                    <option value="hat">Hat</option> 
                    <option value="jacket">Jacket</option>
                    <option value="woman">Woman Top</option>
                    <option value="men">Men</option>
                  </select>
                </FormGroup>
              </div>

              <div>
                <FormGroup className='form__group'>
                    <span>Product Image</span>
                    <input type="file"  onChange={e=> setEnterProductImg(e.target.files[0])} required/>
                </FormGroup>
              </div>

              <button className='primary__btn' type='submit'>Add Product</button>
              </Form>
            
            </>)
          }
        </Col>
      </Row>
    </Container>
  </section>
}

export default AddProduct;
