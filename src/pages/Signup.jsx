import React, { useState} from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {storage} from '../firebase.config';
import {toast} from 'react-toastify';
import { db } from "../firebase.config";
import {setDoc, doc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const Signup = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const signup = async(e) =>{
        e.preventDefault()
        setLoading(true)

        try {
            const userCredential = await createUserWithEmailAndPassword(auth,
                email,password);

                const user= userCredential.user;
                const createdAt = new Date();

                const storageRef = ref(storage, `image/${Date.now() + username}`)
                const uploadTask = uploadBytesResumable(storageRef, file)
                uploadTask.on((error)=>{
                    toast.error(error.message)
                }, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                       
                        //update user profile
                        await updateProfile(user, {
                            displayName: username,
                            photoURL: downloadURL,
                        });

                        // store user data in firestore database
                        await setDoc(doc(db, 'users', user.uid), {
                            uid: user.uid,
                            displayName: username,
                            email,
                            photoURL: downloadURL,
                            createdAt
                        });

                    });
                }) 
                
                setLoading(false)
                toast.success('Account Created Successfully')
                navigate('/login')

            
        } catch (error) {
            setLoading(false);
            toast.error('something went wrong');
        }
    
    };
        

     

    return(
        <Helmet title='Signup'>
            <section className="login__section">
                <Container>
                    <Row>
                    {
                        loading? (<Col lg='12' className="text-center"> : 
                            <h5>Loading....</h5></Col> ) : ( 
                             <Col className="col__login">
                             <h3 className="login">Signup</h3>
 
                                 <Form className="auth__form" onSubmit={signup}>
                                 <FormGroup className="form__groups">
                                         <input type="text" placeholder="Username" 
                                             value={username}  
                                             onChange={(e) => setUsername(e.target.value)}/>
                                     </FormGroup>
 
                                     <FormGroup className="form__groups">
                                         <input type="email" placeholder="Enter your email" 
                                             value={email} 
                                             onChange={(e) => setEmail(e.target.value)}/>
                                     </FormGroup>
 
                                     <FormGroup className="form__groups">
                                         <input type="password" placeholder="Enter your password" 
                                             value={password} 
                                             onChange={e=> setPassword(e.target.value)}/>
                                     </FormGroup>
 
                                     <FormGroup className="form__groups">
                                         <input type="file"  
                                             onChange={e=> setFile(e.target.files[0])}/>
                                     </FormGroup>
 
                                     <button type="submit" className="btn__login">
                                         Create Account
                                     </button>
 
                                     <p>I have an account? <Link to='/login'>Log In</Link></p>
                            
                                 </Form>                            
                             
                         </Col>
                   )}                                                
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
    
}



export default Signup;