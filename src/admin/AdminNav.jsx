import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import useAuth from '../custom hooks/useAuth'
import {NavLink} from 'react-router-dom';
import '../styles/admin-nav.css';

const admin__nav =[
    {
        display: 'Dashboard',
        path: '/dashboard'
    },
    {
        display: 'All-Products',
        path: '/dashboard/all-products'
    },
    {
        display: 'Orders',
        path: '/dashboard/orders'
    },
    {
        display: 'Add-Product',
        path: '/dashboard/add-product'
    },
    {
        display: 'Users',
        path: '/dashboard/users'
    },
]

const AdminNav = () => {

    const {currentUser} = useAuth()

  return (

    <>
    <header className='admin__header'>
        <div className='admin__nav-top'>
            <Container>
                <Row> 
                    <div className='admin__nav-wrapper-top'>
                        <div className='logo'>
                            <div>
                                <h1>InfinityMart</h1>
                               
                            </div>
                        </div> 

                        <div className='search-box'>
                            <input type="text" placeholder='search...' />
                            <span><i class="ri-search-line"></i></span>
                        </div>

                        <div className='admin__nav-top-right'>
                            <span><i class="ri-notification-3-line"></i></span>
                            <span><i class="ri-settings-2-line"></i></span>
                            <img src={ currentUser && currentUser.photoURL} alt="" />
                        </div>
                    </div>
                   
                </Row>
            </Container>

        </div>

    </header>

    <section className='admin__menu'>
        <Container>
            <Row>
                <div className='admin__navigation'>
                    <ul className='admin__menu-list'>
                        {
                            admin__nav.map((item, index)=> (
                                <li 
                                    className='admin__menu-item' key={index}>
                                    <NavLink to={item.path} 
                                    style={{ textDecoration: 'none' }}
                                     className={navClass => navClass.isActive
                                       ? 'active__admin-menu' : '' }>{item.display}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Row>
        </Container>
    </section>

    </>
  )
}

export default AdminNav;
