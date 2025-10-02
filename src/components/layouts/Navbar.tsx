import React from 'react'
import '../../components/styles/utilities/Navbar.css'
import Logo from "../images/henreizh_favicon.png"

function Navbar() {
  return (
    <>
    <div className="header-main">
        <div className="header-left">
            <img className='navbar-favicon' src={Logo} />
            <button>Home</button>
            <button>Shop</button>
            <button>Collections</button>
            <button>About Us</button>
            <button>Contact</button>
        </div>
        <div className="header-right">      
            <button>Cart</button>
            <button>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default Navbar