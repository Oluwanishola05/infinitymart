import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useGetData from '../custom hooks/useGetData';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';

const Users = () => {

    const {data: usersData, loading } = useGetData('users');

    const deleteUser = async (id) => {
        await deleteDoc(doc(db, 'users', id))
        toast.success('User deleted')
    }     
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12'><h4>Users</h4></Col>
                <Col lg='12'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>CreatedAt</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                loading ? <h5>Loading</h5>
                                : usersData?.map(user=>(
                                    <tr key={user.uid}>
                                        <td><img src={user.photoURL} alt="" /></td>
                                        <td>{user.displayName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.createdAt}</td>
                                        <td>
                                            {" "}
                                            <button className='btn btn-danger' onClick={()=> 
                                                {deleteUser(user.uid)}}>Delete</button>{" "}
                                            </td>
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

export default Users;
