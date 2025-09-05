import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <div class="header">
                <div class="logo"><img src={logo} alt="Logo" /></div>
                <div class="nav">
                    <ul class="nav-items">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <button class="call-to-action">Get Started</button>
            </div>

        </>
    )
}

export default Header
