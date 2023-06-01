import React, { useState} from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col, Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from '../components/spinner/LoadingSpinner';






const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const signIn = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email,
                password)

            const user = userCredential.user

            console.log(user)
            setLoading(false)
            toast.success('Successfully Logged In')
            navigate('/checkout')
            
        } catch (error) {
            setLoading(false)
            toast.error(error.message)
            
        }
    }

    return(
        <Helmet title='Login'>
            <section className="login__section">
                <Container>
                    <Row>  
                        {
                            loading ? <Col lg='12' className="text-center">
                                <LoadingSpinner/>
                            </Col> : 
                                <Col className="col__login">
                                <h3 className="login">Login</h3>
    
                                    <Form className="auth__form" onSubmit={signIn}>
                                        <FormGroup className="form__groups">
                                            <input type="email" placeholder="Enter your email" value={email} onChange={e=> setEmail(e.target.value)}/>
                                        </FormGroup>
    
                                        <FormGroup className="form__groups">
                                            <input type="password" placeholder="Enter your password" value={password} onChange={e=> setPassword(e.target.value)}/>
                                        </FormGroup>
    
                                        <div>
                                            <button type="submit" className="btn__login">
                                                LOGIN
                                            </button>
                                        </div>
                             
                                        
                            
                                        <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
                               
                                    </Form>                            
                            </Col>
                        }                    
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Login;