import React from 'react'
import menuItems from './MenuItems'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navBar">

            <div className="navBar__logo_img">
                {menuItems.map(img => (
                    <img  src={img.src} alt="" />
                ))}
            </div>

            <ul className="navBar__ul">
                {menuItems.map(item => (
                    <>
                        <li>{item.menu}</li>
                        <li>{item.explore}</li>
                        <li>{item.aboutMe}</li>
                        <li>{item.contact}</li>
                    </>

                ))}
            </ul>
        </nav>
    )
}

export default Navbar
