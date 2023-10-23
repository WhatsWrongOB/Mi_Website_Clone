import React from 'react'
import '../Styles/Navbar.css'
import  data from '../Data/data.json'

const Navbar = () => {

  const logo = data.logo;

  return (
    <nav className="Navbar">
      <div className="logo">
        <a href="/">
        <img className='logo_img' src={logo} alt="logo" />
        </a>
      </div>
      <ul className="Navbar_menu">
        <li><a className='navbar_link' href="/miPhone">MI Phones</a></li>
        <li><a className='navbar_link' href="/redmiPhone">Redmi Phones</a></li>
        <li><a className='navbar_link' href="/tv">TV</a></li>
        <li><a className='navbar_link' href="/laptop">Laptop</a></li>
        <li><a className='navbar_link' href="/fitness">Fitness & Lifestyle</a></li>
        <li><a className='navbar_link' href="/homes">Home</a></li>
        <li><a className='navbar_link' href="/audio">Audio</a></li>
        <li><a className='navbar_link' href="/accessories">Accessories</a></li>
      </ul>
    </nav>
  )
}

export default Navbar