import React from 'react'
import './Navbar.css'
import NavbarTop from './NavbarTop'
import NavbarMain from './NavbarMain'
import NavbarBottom from './NavbarBottom'
import { useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation()

    if (location.pathname === "/login") {
        return <></>
    }
    
    if (location.pathname === "/admin") {
        return <></>
    }

    return (
        <div className='navbar'>
            <NavbarTop />
            <NavbarMain />
            <NavbarBottom />
        </div>
    )
}

export default Navbar