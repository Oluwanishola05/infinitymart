import React, {useRef, useEffect}  from "react";
import './Header.css';

import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from "framer-motion";

import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import useAuth from '../../custom hooks/useAuth'
import { Link } from "react-router-dom"; 
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";


const nav__links = [
    {
        path:'home',
        display:'Home'
    },
    {
        path:'shop',
        display:'Shop'
    },
    {
        path:'cart',
        display:'Cart'
    }
];

const Header = () => {

    const headerRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const profileActionsRef = useRef(null);

    const menuRef = useRef(null);
    const navigate = useNavigate();
    const {currentUser} = useAuth();

    const stickyHeaderFunc = () =>{
        window.addEventListener('scroll', ()=> {
           if(document.body.scrollTop > 80 || 
                document.documentElement.scrollTop
            > 80) {
                headerRef.current.classList.add('sticky__header')
            }
            else {
                headerRef.current.classList.remove('sticky__header')
            }
        });
    };

    const logout = () => {
        signOut(auth).then(() => {
            toast.success('Logged Out')
            navigate('/home');
        }).catch(err => {
            toast.error(err.message)
        })
    }

    useEffect(() => {
        stickyHeaderFunc()

        return ()=> window.removeEventListener('scroll', stickyHeaderFunc)
    });

    const menuToggle = () =>menuRef.current.classList.toggle('active__menu');

    const navigateToCart = () => {
        navigate('/cart')
    };

    const logoLinkHome = () => {
        navigate('/home')
    };

    const toggleProfileActions = () => 
    profileActionsRef.current.classList.toggle('show__profileActions')
    
        
     


    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <p onClick={logoLinkHome}>InfinityMart</p>
                               
                            </div>
                        </div>
                        
                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className="menu">
                               {
                                    nav__links.map((item, index) => (
                                        <li className="nav__item" key={index}>
                                            <NavLink style={{textDecoration: 'none'}} to={item.path} className= { (navClass) =>
                                            navClass.isActive ? "nav__active" : ''}>{item.display}</NavLink>
                                        </li>
                                    )
                                    )
                               }
                            </ul>
                        </div>

                        <div className="nav__icons">
                            <span className="fav__icon">
                                <i class="ri-heart-line"></i>
                                <span id="badge" className="badge">1</span>
                            </span>

                            <span className="cart__icon" onClick={navigateToCart}>
                                <i class="ri-shopping-cart-2-fill"></i>
                                <span id="badge" className="badge">{totalQuantity}</span>
                            </span>
                            
                            <div className="profile">
                                <motion.img 
                                    whileTap={{ scale: 1.2}} src={
                                    currentUser? currentUser.photoURL: userIcon} 
                                    alt="" 
                                    onClick={toggleProfileActions} 
                                />

                                  <div 
                                    className="profile__actions" 
                                    ref={profileActionsRef}
                                    onClick={toggleProfileActions}>
                                    {
                                        currentUser ? 
                                        (<span onClick={logout}>Logout</span> 
                                        ): ( 
                                        <div>
                                            <ul className="inner">
                                               <li> <Link to="/signup">SignUp</Link></li>
                                                <li><Link to="/login">Login</Link></li>
                                                <li><Link to="/dashboard">Dashboard</Link></li>
                                            </ul>
                                        </div>
                                    )}
                                  </div>  
                            </div>

                            <div className="mobile__menu">
                            <span onClick={menuToggle}><i class="ri-menu-line"></i></span>

                        </div>

                        </div>

                        
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header;