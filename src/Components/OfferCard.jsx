import React from 'react'
import '../Styles/Offer.css'

const OfferCard = ({ image, link }) => {
  return (
    <a href={link}>
      <img className='offer_img' src={image} alt="offer_img" />
    </a>
  )
}

export default OfferCard