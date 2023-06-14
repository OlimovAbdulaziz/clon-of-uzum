import React from 'react'
import './Home.css'
import Slider from '../../components/slider/Slider'
import Products from '../../components/products/Products'

function Home() {
  return (
    <div className='home'>
        <Slider />
        <Products />
    </div>
  )
}

export default Home