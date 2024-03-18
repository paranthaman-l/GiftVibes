import React from 'react'
import Header from '../../shared/Header'
import Product from '../Product.jsx'
const FeaturedProduct = () => {
  
  return (
    <div  className=''>
        <Header title={"FeaturedProduct"} subTitle={"Get all amazing product here"} linkTitle={"More Product"} link={"/"}/>
        <Product/>
    </div>
  )
}

export default FeaturedProduct