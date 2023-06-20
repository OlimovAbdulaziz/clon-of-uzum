import React from 'react'
import "./CartWrapper.css"
import { addToCart, decrementCart, removeFromCart } from '../../context/cart';
import { useDispatch } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai'
function CartWrapper({ data }) {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        const input1 = document.querySelector('.inputOne')
        const input2 = document.querySelector('.inputTwo')
        const input3 = document.querySelector('.inputThree')
        const chat__id = 1286705813
        const token = "5913694937:AAGZY_4fGjJU3uULL31u6Fi0fCC8Eprwggo"

        let my__text = ` Ism: ${input1.value} %0A Familiya: ${input2.value} %0A Telefon-raqam: ${input3.value} %0A %0A`

        data?.forEach(item => {
            my__text += `Nomi: ${item.title} %0A`
            my__text += `Soni: ${item.quantity} %0A`
            my__text += `Narxi: ${item.price} so'm %0A%0A`
        })

        my__text += `Jami: ${data?.reduce((a, b) => a + (b.price * b.quantity), 0)}so'm `

        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat__id}&text=${my__text}`

        const api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()

    }
    return (
        <>
            <h2>Sizda <span style={{ color: "red" }}>{data.length}</span> ta mahsulot bor</h2>
            <div className='cart__wrapper'>
                <div className="cart__wrapper-content">
                    {
                        data?.map((item) =>
                            <div className='cart__wrapper-item' key={item.id}>
                                <img src={item.url} alt="" width={80} />
                                <h3>{item.title}</h3>
                                <h2>{item.quantity * item.price} so'm</h2>
                                <div className="cart__wrapper__buttons">
                                    <button disabled={item.quantity <= 1} onClick={() => dispatch(decrementCart(item))}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(addToCart(item))}>+</button>
                                </div>
                                <button className='btn__delete' onClick={() => dispatch(removeFromCart(item))}><AiOutlineDelete /> <br /> </button>
                                <p>{item.price} so'm</p>
                                <br />
                                <br />
                                <hr />
                                <br />
                            </div>
                        )
                    }
                </div>
                <div className="cart__wrapper-form">
                    <h3>Buyurtma berish</h3>
                    <form onSubmit={handleClick} action="">
                        <input className='inputOne' type="text" placeholder='Ism:' />
                        <input className='inputTwo' type="text" placeholder='Familiya:' />
                        <input className='inputThree' type="text" placeholder='Telefon-raqam:' />
                        <button type='submit'>Buyurtma berish</button>
                    </form>
                    <h3>Jami: {data?.reduce((a, b) => a + (b.price * b.quantity), 0)}so'm</h3>
                </div>
            </div>
        </>
    )
}

export default CartWrapper