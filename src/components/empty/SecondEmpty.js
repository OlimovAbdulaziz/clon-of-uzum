import React from 'react'
import "./Empty.css"
import { Link } from 'react-router-dom'

function SecondEmpty() {
    return (
        <div className='empty-container'>
            <img src="https://uzum.uz/static/img/shopocat.490a4a1.png" alt="" /> <br />
            <h2>Savatda hozircha mahsulot yoʻq</h2> <br />
            <h4 style={{ color: "grey", fontSize: "16px" }}>Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping</h4> <br />
            <Link to={"/"}><button>Bosh sahifa</button></Link>
        </div>
    )
}

export default SecondEmpty