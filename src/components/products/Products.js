import React from 'react'
import "./Products.css"
import Skeleton from '../skeleton/Skeleton'
import { PRODUCTS } from '../../static'
import ProductWrapper from '../product-wrapper/ProductWrapper'

function Products() {
    return (
        <div className='container'>
            <h2>Products</h2>
            <ProductWrapper data={PRODUCTS} />
            <Skeleton />
        </div>
    )
}

export default Products