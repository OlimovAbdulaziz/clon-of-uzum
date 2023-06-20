import React from 'react'
import { AiOutlineApple, AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook } from 'react-icons/ai'
import { BsGooglePlay, BsTelegram } from "react-icons/bs"
import "./Footer.css"
import { useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()


  if (location.pathname === "/admin") {
    return <></>
  }

  return (
    <div className='container'>
      <div className="footer__wrapper">
        <ul className="footer__collection">
          <b>Biz haqimizda</b>
          <li className="footer__item">Topshirish punktlari</li>
          <li className="footer__item">Vakansiyalar</li>
        </ul>
        <ul className="footer__collection">
          <b>Foydalanuvchilarga</b>
          <li className="footer__item">Biz bilan bog'lanish</li>
          <li className="footer__item">Savol-Javob</li>
        </ul>
        <ul className="footer__collection">
          <b>Tadbirkorlarga</b>
          <li className="footer__item">Uzumda Soting</li>
          <li className="footer__item">Sotuvchi kabinetiga o'tish</li>
        </ul>
        <div className="footer__collection">
          <b>Ilovani yuklab olish</b>
          <div className="download">
            <div className="apple">
              <AiOutlineApple />
              <font>App Store</font>
            </div>
            <div className="google__play">
              <BsGooglePlay />
              <font>Google Play</font>
            </div>
          </div>
          <b>Ijtimoiy tarmoqlarda kuzating!</b>
          <div className="icons">
            <AiOutlineInstagram style={{ color: "orange" }} />
            <BsTelegram style={{ color: "blue" }} />
            <AiOutlineYoutube style={{ color: "red" }} />
            <AiOutlineFacebook style={{ color: "blue" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer