import React from 'react';
import useGetData from '../custom hooks/useGetData';

const HomeAdmin = () => {

    const {data: products, loading} = useGetData('products')


  return (
    <div>
      
    </div>
  )
}

export default HomeAdmin;
