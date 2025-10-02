import React from 'react'
import logo from '../../assets/logo.svg'
import { navItems } from '../../data/layout.jsx'
import './Header.css'

const Header = () => {
    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    return (
        <>
        <div className="header-wrapper" id="home">

            <div className="header">
                <div className="logo"><img src={logo} alt="Logo" /></div>
                <button className="call-to-action">Get Started</button>
            </div>

            <div className="nav">
                <ul className="nav-items">
                    {navItems.map((nav, id)=>
                        <li key={id} onClick={() => handleScroll(nav.toLowerCase())}>{nav}</li>
                    )}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header
