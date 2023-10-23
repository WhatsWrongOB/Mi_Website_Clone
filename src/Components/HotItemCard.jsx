import React from 'react'
import '../Styles/HotAccessories.css'

const HotItemCard = ({image,name,price,key}) => {
  return (
    <div className="card">
        <img src={image} alt={key} />
        <b><p className="name">{name}</p></b>
        <p className="price">{price}</p>
    </div>
  )
}

export default HotItemCard