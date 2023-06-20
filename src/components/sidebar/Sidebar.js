import React from 'react'
import "./Sidebar.css"
import { DATA2 } from '../../static'
import { BsChevronRight } from 'react-icons/bs'

function Sidebar({ show, setShow }) {

    return (
        <>
            {
                show ?
                    <div onClick={() => setShow(false)} className='sidebar__shadow'></div>
                    : <></>
            }
            <div className={`sidebar ${show ? "show" : ""}`}>
                <div className="sidebar__wrapper">
                {
                    DATA2?.map((item) =>
                        <div key={item.id} className="sidebar__details">
                            <div className="sidebar__img">
                                <img src={item.url} alt="" />
                            </div>
                            <ul className="sidebar__collection">
                                <li className='sidebar__item'>{item.title}</li>
                            </ul>
                            <BsChevronRight />
                        </div>
                    )
                }
                </div>
            </div>
        </>
    )
}

export default Sidebar