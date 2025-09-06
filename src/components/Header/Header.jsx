import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo"><img src={logo} alt="Logo" /></div>
                <div className="nav">
                    <ul className="nav-items">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <button className="call-to-action">Get Started</button>
            </div>

        </>
    )
}

export default Header
