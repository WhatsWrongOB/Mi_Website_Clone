import React from 'react'
import '../Styles/HotAccessoriesMenu.css'
import { Link } from 'react-router-dom'

const HotAccessoriesMenu = () => {
  return (
    
        <ul className="hotAccessoriesMenu">
          <li><Link className='hotAccessoriesMenu_link' to = "/music">Music Store</Link></li>
          <li><Link className='hotAccessoriesMenu_link' to = "/smartDevice">Smart Device</Link></li>
          <li><Link className='hotAccessoriesMenu_link' to = "/home">Home</Link></li>
          <li><Link className='hotAccessoriesMenu_link' to = "/lifeStyle">Lifestyle</Link></li>
          <li><Link className='hotAccessoriesMenu_link' to = "/mobileAccessories">Mobile Accessories</Link></li>
        </ul>

  )
}

export default HotAccessoriesMenu