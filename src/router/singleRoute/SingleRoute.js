import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useLocation } from 'react-router-dom'
import { BsChevronRight } from 'react-icons/bs'
import "./SingleRoute.css"
import { useDispatch } from 'react-redux';
import {addToCart} from '../../context/cart'
function SingleRoute() {
    const { state } = useLocation()
    console.log(state);
    const dispatch = useDispatch()
    return (
        <div className='container'>
            <div className="singleRoute">
                <div className="product__image">
                    <img src={state.url} alt="" />
                </div>
                <div className="product__details">
                    <div className="product__rating">
                        <AiFillStar />
                        <span>5.0 (585 baho)</span>
                    </div>
                    <h2 className='product__title'>{state.title}</h2>
                    <h4 className='send'>Yetkazib berish:  <span style={{ color: "#555", fontSize: "14px" }}>1 kun bepul</span></h4>
                    <h4 style={{ color: "blue" }}>Narx:</h4>
                    <div className='product__price'>
                        <h3>{state.price} so'm</h3>
                        <del style={{ color: "#555", fontSize: "13px" }}>{Math.round(state.price * 1.5)} so'm</del>
                    </div>
                    <div className="product__monthly">
                        <span>{Math.round(state.price * 1.44 / 12)} so'mdan</span>
                        <p style={{ flex: 1 }}>muddatli to'lovga</p>
                        <BsChevronRight />
                    </div>
                    <div className="product__btns">
                        <button  className="btnOne" onClick={()=> dispatch(addToCart(state))}>Savatga qo'shish</button>
                        <button className="btnTwo">Xarid qilish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRoute