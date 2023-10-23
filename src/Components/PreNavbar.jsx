import React from 'react'
import '../Styles/PreNavbar.css'
import cart from '../icons/cart.svg'
import search from '../icons/search.svg'
import heart from '../icons/heart.svg'
import contact from '../icons/contact.svg'
import { Link } from 'react-router-dom'

const PreNavbar = () => {
  return (
    <>
    <div className='div'>obaid</div>
    <nav className="Prenavbar">
      <ul className="Menu">
        <li><Link className='link' to = "/">Mi Pakistan</Link></li><span className='divider'>|</span>
        <li><Link className='link' to = "/">Mi Community</Link></li><span className='divider'>|</span>
        <li><Link className='link' to = "/">Support</Link></li><span className='divider'>|</span>
        <li><Link className='link' to = "/">Track My Order</Link></li><span className='divider'>|</span>
        <li><Link className='link' to = "/">Wholesale Query</Link></li><span className='divider'>|</span>
        <li><Link className='link' to = "/">Report Faulty Products</Link></li>
      </ul>
      <div className="icon">
        <img src={search} alt="searh_icon" />
        <img src={contact} alt="contact_icon" />
        <img src={heart} alt="heart_icon" />
        <img src={cart} alt="cart_icon" />
      </div>
    </nav>
    </>
  )
}

export default PreNavbar