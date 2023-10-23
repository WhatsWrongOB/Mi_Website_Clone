import React from 'react'
import '../Styles/NavOptions.css'

const NavCard = ({image,name,price,index}) => {
  return (
    <div className="nav_card">
     <img src={image} alt={index} />
     <p className="nav_name">{name}</p>
     <p className="nav_price">{price}</p>
    </div>
  )
}

export default NavCard