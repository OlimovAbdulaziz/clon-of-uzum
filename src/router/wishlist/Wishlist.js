import React from 'react'
import './WishList.css'
import FirstEmpty from '../../components/empty/FirstEmpty'
import { useSelector } from 'react-redux'
import ProductWrapper from '../../components/product-wrapper/ProductWrapper'


function Wishlist() {
  const heart = useSelector(i => i.heart.value)
  console.log(heart);
  return (
    <div className="container">

      <div className='wishlist'>
      {
        heart.length ?
          <ProductWrapper data={heart} /> :
          <FirstEmpty />
      }
    </div>
    </div>
  
  )
}

export default Wishlist