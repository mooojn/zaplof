import React from 'react'
import logo from '../../assets/logo.svg'
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
                    <li onClick={() => handleScroll("home")}>Home</li>
                    <li onClick={() => handleScroll("projects")}>Projects</li>
                    {/* <li onClick={() => handleScroll("experience")}>Experience</li> */}
                    <li onClick={() => handleScroll("services")}>Services</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header
