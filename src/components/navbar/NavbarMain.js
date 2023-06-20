import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineHome } from "react-icons/ai"
import { Link } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

function NavbarMain() {
  const [show, setShow] = useState(false)
  document.body.style.overflow = show ? "hidden" : "auto"

  return (
    <>
      <div className='container navbar__main'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpV9qcb30WEsshbiyvbraPvmjilY93Mt0TuNR1iWuBBA&s" alt="" />
        <Link to={"/"}><h2 className="nav__logo">uzum market</h2></Link>
        <button style={{ cursor: "pointer" }} onClick={() => setShow(true)} className='nav__btn'>
          <AiOutlineMenu />
          <span>Katalog</span>
        </button>
        <div className="nav__search">
          <input type="text" placeholder='Qidirish...' />
          <button><AiOutlineSearch /></button>
        </div>
        <ul className="nav__collection">
          <li className="nav__item">
            <Link to={"/"}>
              <AiOutlineHome />
              <span>Bosh sahifa</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link to={"/login"}>
              <AiOutlineUser />
              <span>Kirish</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link to={"/wishlist"}>
              <AiOutlineHeart />
              <span>Saralangan</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link to={"/chart"}>
              <AiOutlineShoppingCart />
              <span>Savatcha</span>
            </Link>
          </li>
        </ul>
      </div>
      <Sidebar show={show} setShow={setShow} />
    </>
  )
}

export default NavbarMain