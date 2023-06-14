import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <form action="">
          <h2>Telefon raqamni kiriting</h2> <br />
          <h3>Tasdiqlash kodini SMS orqali yuboramiz</h3> <br /> <br />
          <input type="text" placeholder='+998 ( )' /> <br />
          <button type='submit'>Kodni olish</button> <br /> <br />
          <h5>Parol bilan kirish</h5> <br /> <br />
          <h4>Avto tizatsiyadan o'tish orqali siz <span>shaxsiy
            ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz
          </span></h4>  <br />
          <Link to={"/"}>
            <button>Bosh sahifaga qaytish</button>
          </Link>
        </form>

      </div>
    </div>
  )
}

export default Login