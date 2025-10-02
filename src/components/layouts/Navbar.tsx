import React from 'react'
import '../../components/styles/utilities/Navbar.css'

function Navbar() {
  return (
    <>
    <div className="header-main">
        <div className="header-left">
            <img src="" />
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